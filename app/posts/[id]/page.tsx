import Profile from "@components/Profile";
import { getPost } from "@lib/posts";
import { getArtist } from "@lib/artists";
import Image from "next/image";

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  const artist = await getArtist(post.artist);

  return (
    <main className="p-4">
      <div className="grid p-4 gap-4 grid-cols-1 md:grid-cols-2 h-full">
        {/* Media */}
        <div className="w-full h-full min-h-[24rem] rounded-md bg-slate-800 p-4">
          {post.type === "image" && (
            // Render out an image
            <div className="relative h-full">
              <Image
                src={post.downloadURL}
                alt={post.title}
                fill
                className="object-contain m-auto"
                priority
              />
            </div>
          )}
        </div>
        {/* Information */}
        <div className="bg-slate-800 p-4 rounded-md flex items-center justify-center flex-col">
          <h1 className="text-6xl font-bold tracking-wide text-center underline mb-6">
            {post.title}
          </h1>
          <p className="text-3xl">{post.description}</p>
        </div>
      </div>
      <div className="m-4 mt-0 bg-slate-600 p-4 rounded-md">
        <div className="flex">
          <Profile artist={artist} />
          <div className="ml-8">
            <h2 className="text-4xl font-semibold underline mb-3">
              {artist.firstName} {artist.lastName}
            </h2>
            <p className="text-3xl">{artist.bio}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
