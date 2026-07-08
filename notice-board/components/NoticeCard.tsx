import React from 'react';

enum Category {
  Exam = 'Exam',
  Event = 'Event',
  General = 'General'
}

enum Priority {
  Normal = 'Normal',
  Urgent = 'Urgent'
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

interface NoticeCardProps { notice: Notice; onEdit: (notice: Notice) => void; onDelete: (id: number) => void;}

export default function NoticeCard({ notice, onEdit, onDelete }: NoticeCardProps) {

  const getPriorityStyle = (priority: Priority) => {
    return priority === Priority.Urgent 
      ? 'bg-red-100 text-red-800 border-red-200' 
      : 'bg-blue-100 text-blue-800 border-blue-200';
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col justify-between transition-all hover:shadow-lg">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
            {notice.category}
          </span>
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${getPriorityStyle(notice.priority)}`}>
            {notice.priority}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">{notice.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">{notice.body}</p>
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-gray-50">
        <button
          onClick={() => onEdit(notice)}
          className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(notice.id)}
          className="px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
}