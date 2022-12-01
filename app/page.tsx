"use client"

import Thumbnail from "@components/Thumbnail";
import { getPosts } from "@lib/posts";

export default async function HomePage() {
  const posts = await getPosts();

  posts.sort();
  posts.sort((a, b) => b.likes - a.likes).splice(3);

  return (
    <main className="py-12">
      <h1 className="text-6xl underline underline-offset-8 text-center font-semibold tracking-wide mb-12">
        Welcome!
      </h1>
      <iframe
        className="mx-auto md:w-[32rem] md:h-80 w-96 h-64 bg-slate-900"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Introduction video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h1 className="text-5xl font-semibold text-center my-8 tracking-wide underline underline-offset-4">
        Top Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
        {posts.map((post) => (
          <Thumbnail key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
