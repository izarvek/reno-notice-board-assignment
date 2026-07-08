"use client";

import NoticeCard from "@/components/NoticeCard";
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

  useEffect(() => {
    let isMounted = true;

    const loadNotices = async () => {
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
    };

    void loadNotices();

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

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
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
              onEdit={() => undefined}
              onDelete={handleDeleteClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;