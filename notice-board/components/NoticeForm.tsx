import React, { useState } from "react";

export enum Category {
  Exam = "Exam",
  Event = "Event",
  General = "General",
}

export enum Priority {
  Normal = "Normal",
  Urgent = "Urgent",
}

export interface Notice {
  title: string;
  body: string;
  category: Category;
  priority: Priority;
  publishDate: string;
}

interface NoticeFormProps {
  initialData?: Notice | null;
  onSubmit: (data: Partial<Notice>) => void;
  onCancel: () => void;
}

export default function NoticeForm({
  initialData,
  onSubmit,
  onCancel,
}: NoticeFormProps) {
  const getInitialState = () => ({
    title: initialData?.title ?? "",
    body: initialData?.body ?? "",
    category: initialData?.category ?? Category.General,
    priority: initialData?.priority ?? Priority.Normal,
  });

  const [title, setTitle] = useState(getInitialState().title);
  const [body, setBody] = useState(getInitialState().body);
  const [category, setCategory] = useState<Category>(
    getInitialState().category,
  );
  const [priority, setPriority] = useState<Priority>(
    getInitialState().priority,
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      return alert("Please fill out the Title and Body fields.");
    }
    onSubmit({
      title,
      body,
      category,
      priority,
      publishDate: initialData?.publishDate || new Date().toISOString(),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded-xl shadow-md border border-gray-100 "
    >
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        {initialData ? "✏️ Edit Existing Notice" : "📢 Create Brand New Notice"}
      </h2>
      {/* Title */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          placeholder="e.g., Campus Placement Drive"
        />
      </div>
      {/* Body */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Body Content
        </label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={4}
          className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none"
          placeholder="Write the full description of your announcement here..."
        />
      </div>
      {/* Category and Priority */}
      <div className="grid grid-cols-2 gap-4">
        {/* Category */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
            className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          >
            {Object.values(Category).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        {/* Priority */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Priority
          </label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as Priority)}
            className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          >
            {Object.values(Priority).map((prio) => (
              <option key={prio} value={prio}>
                {prio}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex justify-end gap-3 pt-4 border-t border-gray-100 mt-6">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-colors"
        >
          {initialData ? "Update Notice" : "Publish Notice"}
        </button>
      </div>
    </form>
  );
}
