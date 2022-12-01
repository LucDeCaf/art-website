import Image from "next/image";
import Link from "next/link";
import { PostType } from "@lib/types";

export default function Thumbnail({ post }: { post: PostType }) {
  return (
    <div className="rounded-lg overflow-hidden bg-slate-800">
      <Link href={`/posts/${post.id}`}>
        <div className="relative w-full h-60">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <div className="h-auto p-4">
        <h2 className="text-3xl font-semibold tracking-wide">{post.title}</h2>
      </div>
    </div>
  );
}
