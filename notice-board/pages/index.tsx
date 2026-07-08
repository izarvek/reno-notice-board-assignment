"use client";

import NoticeCard from "@/components/NoticeCard";
import NoticeForm from "@/components/NoticeForm";
import { noticeApi } from "@/utils/api";
import React, { useEffect, useState } from "react";

enum Category {
  Exam = "Exam",
  Event = "Event",
  General = "General",
}

enum Priority {
  Normal = "Normal",
  Urgent = "Urgent",
}

interface Notice {
  id: number;
  title: string;
  body: string;
  category: Category;
  priority: Priority;
  publishDate: string;
  createdAt: string;
  updatedAt: string;
}

const Index = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [editingNotice, setEditingNotice] = useState<Notice | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;

    void (async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await noticeApi.getAll();

        if (isMounted) {
          setNotices(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        console.error("Failed to load notices:", err);

        if (isMounted) {
          setError("Unable to load notices right now.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleDeleteClick = async (id: number) => {
    const confirmed = window.confirm(
      `Confirm the deletion of the notice with ID ${id}.`,
    );

    if (!confirmed) {
      return;
    }

    try {
      await noticeApi.delete(id);
      setNotices((currentNotices) =>
        currentNotices.filter((notice) => notice.id !== id),
      );
    } catch (err) {
      console.error("Failed to delete notice:", err);
      setError("Unable to delete notice right now.");
    }
  };

  const handleFormSubmit = async (formData: Partial<Notice>) => {
    try {
      const payload = {
        title: formData.title!,
        body: formData.body!,
        category: formData.category as "Exam" | "Event" | "General",
        priority: formData.priority as "Normal" | "Urgent",
        publishDate: formData.publishDate!,
      };

      if (editingNotice) {
        const updatedNotice = await noticeApi.update(editingNotice.id, payload);
        setNotices((prev) =>
          prev.map((notice) =>
            notice.id === editingNotice.id ? updatedNotice : notice,
          ),
        );
      } else {
        const createdNotice = await noticeApi.create(payload);
        setNotices((prev) => [createdNotice, ...prev]);
      }
    } catch (err) {
      console.error("Failed to save notice:", err);
      setError("Unable to save notice right now.");
    } finally {
      setEditingNotice(null);
      setIsFormOpen(false);
      window.location.reload(); 
    }
  };

  const handleCreateClick = () => {
    setEditingNotice(null);
    setIsFormOpen(true);
  };

  return (
    <div>
      <div className="px-4 sm:px-6 md:px-8 lg:px-30 xl:px-40 py-6">
        <div className="mb-6 flex justify-end">
          <button
            type="button"
            onClick={handleCreateClick}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700"
          >
            Create Notice
          </button>
        </div>

        {isFormOpen && (
          <div className="mb-8">
            <NoticeForm
              initialData={
                editingNotice
                  ? {
                      title: editingNotice.title,
                      body: editingNotice.body,
                      category: editingNotice.category,
                      priority: editingNotice.priority,
                      publishDate: editingNotice.publishDate,
                    }
                  : null
              }
              onSubmit={handleFormSubmit}
              onCancel={() => {
                setEditingNotice(null);
                setIsFormOpen(false);
              }}
            />
          </div>
        )}

        {isLoading ? (
          <div className="py-10 text-center text-gray-600">
            Loading notices...
          </div>
        ) : error ? (
          <div className="py-10 text-center text-red-600">{error}</div>
        ) : notices.length === 0 ? (
          <div className="py-10 text-center text-gray-600">
            No notices available.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {notices.map((notice) => (
              <NoticeCard
                key={notice.id}
                notice={notice}
                onEdit={(notice) => {
                  setEditingNotice(notice);
                  setIsFormOpen(true);
                }}
                onDelete={handleDeleteClick}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
