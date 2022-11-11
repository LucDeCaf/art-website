import { ArtistType } from "@lib/types";
import { db } from "@utils/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export async function getArtists() {
  const artistsRef = collection(db, "artists");
  const docs = (await getDocs(artistsRef)).docs;
  const artists = docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return artists as ArtistType[];
}

export async function getArtist(artistId: string) {
  const docRef = doc(db, "artists", artistId);
  const document = await getDoc(docRef);
  const artist = {
    ...document.data(),
    id: document.id,
  };

  return artist as ArtistType;
}
