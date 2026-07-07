import axiosInstance from "@/lib/axios";

export interface NoticePayload {
  title: string;
  body: string;
  category: "Exam" | "Event" | "General";
  priority: "Normal" | "Urgent";
  publishDate: string;
}

export const noticeApi = {
  getAll: async () => {
    const response = await axiosInstance.get("/notices/list-notices");
    return response.data;
  },

  getById: async (id: number) => {
    const response = await axiosInstance.get(`/notices/get-notice?id=${id}`);
    return response.data;
  },

  create: async (data: NoticePayload) => {
    const response = await axiosInstance.post(
      "/notices/create-notice",
      data
    );
    return response.data;
  },

  update: async (
    id: number,
    data: NoticePayload
  ) => {
    const response = await axiosInstance.put(
      `/notices/update-notice?id=${id}`,
      data
    );
    return response.data;
  },

  delete: async (id: number) => {
    const response = await axiosInstance.delete(
      `/notices/delete-notice?id=${id}`
    );
    return response.data;
  },
};