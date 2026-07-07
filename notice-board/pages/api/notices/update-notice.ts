import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler( req: NextApiRequest, res: NextApiResponse ) {
 
  if (req.method !== "PUT") {
    return res.status(405).json({
      message: "Method Not Allowed",
    });
  }

  const id = Number(req.query.id);

  if (!id || isNaN(id)) {
    return res.status(400).json({
      message: "Invalid notice id",
    });
  }

  try {
    const { title, body, category, priority, publishDate} = req.body;

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

    const notice = await prisma.notice.update({
      where: {
        id,
      },
      data: {
        title: title.trim(),
        body: body.trim(),
        category,
        priority,
        publishDate: date,
      },
    });

    return res.status(200).json(notice);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to update notice",
    });
  }
}