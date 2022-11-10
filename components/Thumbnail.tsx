import Image from "next/image";
import { PostType } from "../lib/types";

export default function Thumbnail({ post }: { post: PostType }) {
  return (
    <div className="rounded-lg overflow-hidden bg-slate-800">
      <div className="relative w-full h-60">
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="h-auto p-4">
        <h2 className="text-3xl font-semibold tracking-wide">{post.title}</h2>
        <p className="text-lg font-medium mt-2">{post.description}</p>
      </div>
    </div>
  );
}