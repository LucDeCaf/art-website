import { ArtistType } from "@lib/types";
import Image from "next/image";

export default function Profile({ artist }: { artist: ArtistType }) {
  return (
    <div className="relative md:w-40 md:h-40 w-28 h-28 rounded-full overflow-hidden">
      <Image
        src={artist.profileURL}
        alt={artist.firstName}
        fill
        className="object-contain"
      />
    </div>
  );
}
