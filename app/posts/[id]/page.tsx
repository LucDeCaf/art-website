import { doc, getDoc } from "firebase/firestore";
import { db } from "@utils/firebase";

async function getPostData(postId: string) {
  const docRef = doc(db, "posts", postId)
  const document = await getDoc(docRef)
}

export default async function PostPage() {
  
}