import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler( req: NextApiRequest, res: NextApiResponse ) {
 
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { title, body, category, priority, publishDate } = req.body;

    if (!title?.trim() || !body?.trim()) {
      return res.status(400).json({
        message: "Title and body are required",
      });
    }

    if (!["Exam", "Event", "General"].includes(category)) {
      return res.status(400).json({
        message: "Invalid category",
      });
    }

    if (!["Normal", "Urgent"].includes(priority)) {
      return res.status(400).json({
        message: "Invalid priority",
      });
    }

    const date = new Date(publishDate);

    if (isNaN(date.getTime())) {
      return res.status(400).json({
        message: "Invalid publish date",
      });
    }

    const notice = await prisma.notice.create({
      data: {
        title: title.trim(),
        body: body.trim(),
        category,
        priority,
        publishDate: date,
      },
    });

    return res.status(201).json(notice);
    
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to create notice",
    });
  }
}