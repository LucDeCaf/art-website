export interface PostType {
  id: string;
  artist: string;
  title: string;
  description: string;
  downloadURL: string;
  type: string;
  likes: number;
  thumbnail: string;
}

export interface ArtistType {
  id: string;
  firstName: string;
  lastName: string;
  bio: string;
  profileURL: string;
}
