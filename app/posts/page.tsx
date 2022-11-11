import Thumbnail from "@components/Thumbnail";
import { getPosts } from "@lib/posts";

export default async function PostsPage() {
  const posts = await getPosts();
  posts.sort((a, b) => b.likes - a.likes);

  const postElements = posts.map((post) => (
    <Thumbnail key={post.id} post={post} />
  ));

  return (
    <main className="p-4">
      <h1 className="text-6xl text-center font-bold tracking-wide underline underline-offset-8 mb-12 mt-6">All Posts</h1>
      <div className="grid gap-4 mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {postElements}
      </div>
    </main>
  );
}
