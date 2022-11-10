import { collection, getDocs } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { PostType } from "@lib/types";
import { db } from "@utils/firebase";

interface ResponseType {
  success: boolean;
  data: string | PostType[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method !== "GET") {
    return res.status(405).json({
      success: false,
      data: `Invalid method '${req.method}'`,
    });
  }

  try {
    const postsRef = collection(db, "posts");
    const docs = (await getDocs(postsRef)).docs;
    const posts = docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })) as PostType[];

    return res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (err: any) {
    return res.status(400).json({
      success: false,
      data: err.message,
    });
  }
}
