"use client";

import NoticeCard from "@/components/NoticeCard";
import React, { useState } from "react";

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

const notices: Notice[] = [
  {
    id: 3,
    title: "Campus Placement",
    body: "A campus placement drive will be conducted for final year students. Bring your updated resume.",
    category: "General",
    priority: "Urgent",
    publishDate: "2026-07-18T00:00:00.000Z",
    createdAt: "2026-07-07T17:45:18.614Z",
    updatedAt: "2026-07-07T17:56:21.603Z",
  },
  {
    id: 9,
    title: "Assignment Submission Deadline",
    body: "All students must submit their assignments before 5 PM today. Late submissions will not be accepted.",
    category: "Exam",
    priority: "Urgent",
    publishDate: "2026-07-11T00:00:00.000Z",
    createdAt: "2026-07-07T17:46:02.426Z",
    updatedAt: "2026-07-07T17:46:02.426Z",
  },
  {
    id: 7,
    title: "Holiday Announcement",
    body: "The college will remain closed tomorrow due to heavy rainfall.",
    category: "General",
    priority: "Urgent",
    publishDate: "2026-07-08T00:00:00.000Z",
    createdAt: "2026-07-07T17:45:49.809Z",
    updatedAt: "2026-07-07T17:45:49.809Z",
  },
  {
    id: 8,
    title: "Workshop on Web Development",
    body: "A free workshop on modern web development will be conducted this Saturday.",
    category: "Event",
    priority: "Normal",
    publishDate: "2026-07-22T00:00:00.000Z",
    createdAt: "2026-07-07T17:45:56.499Z",
    updatedAt: "2026-07-07T17:45:56.499Z",
  },
  {
    id: 10,
    title: "NSS Volunteer Meeting",
    body: "All NSS volunteers are requested to attend the meeting in Seminar Hall at 2 PM.",
    category: "General",
    priority: "Normal",
    publishDate: "2026-07-16T00:00:00.000Z",
    createdAt: "2026-07-07T17:46:09.028Z",
    updatedAt: "2026-07-07T17:46:09.028Z",
  },
  {
    id: 2,
    title: "Annual Sports Day",
    body: "The Annual Sports Day will be held on the college ground. All students are invited to participate.",
    category: "Event",
    priority: "Normal",
    publishDate: "2026-07-15T00:00:00.000Z",
    createdAt: "2026-07-07T17:45:11.262Z",
    updatedAt: "2026-07-07T17:45:11.262Z",
  },
];

const index = () => {
  const [editingNotice, setEditingNotice] = useState<Notice | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState<number | null>(null);

  const handleEditClick = (notice: Notice) => {
    setEditingNotice(notice);
    setIsFormOpen(true);
  };

  console.log(deleteTargetId)
  console.log(editingNotice)


  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {notices.map((notice) => (
          <NoticeCard
            key={notice.id}
            notice={notice}
            onEdit={handleEditClick}
            onDelete={(id) => setDeleteTargetId(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default index;
