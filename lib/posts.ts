import { PostType } from "@lib/types";
import { db } from "@utils/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export async function getPosts() {
  const postsRef = collection(db, "posts");
  const docs = (await getDocs(postsRef)).docs;
  const posts = docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return posts as PostType[];
}

export async function getPost(postId: string) {
  const docRef = doc(db, "posts", postId);
  const document = await getDoc(docRef);
  const post = {
    ...document.data(),
    id: document.id,
  };

  return post as PostType;
}
