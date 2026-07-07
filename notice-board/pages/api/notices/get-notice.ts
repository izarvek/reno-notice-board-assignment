import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler( req: NextApiRequest, res: NextApiResponse ) {
 
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const id = Number(req.query.id);

  if (!id || isNaN(id)) {
    return res.status(400).json({
      message: "Invalid notice id",
    });
  }

  try {
    const notice = await prisma.notice.findUnique({
      where: { id },
    });

    if (!notice) {
      return res.status(404).json({
        message: "Notice not found",
      });
    }

    return res.status(200).json(notice);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Something went wrong",
    });
  }
}