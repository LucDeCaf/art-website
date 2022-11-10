import { PostType } from "@lib/types";
import { db } from "@utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

interface ResponseType {
  success: boolean;
  data: string | PostType;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method !== "GET") {
    return res.status(405).json({
      success: false,
      data: `Invalid method '${req.method}'.`,
    });
  }

  const { id } = req.query

  if (!id || typeof id !== "string") {
    return res.status(400).json({
      success: false,
      data: "Invalid request.",
    });
  }

  try {
    const docRef = doc(db, "posts", id);
    const document = await getDoc(docRef);
    const post = { ...document.data(), id: document.id } as PostType;

    return res.status(200).json({
      success: true,
      data: post,
    });
  } catch (err: any) {
    return res.status(400).json({
      success: false,
      data: err.message,
    });
  }
}
