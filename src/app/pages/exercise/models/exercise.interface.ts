export interface Exercise {
  _id: string;
  title: string;
  category: string[];
  description: string;
  image: {
    secure_url: string;
    public_id: string;
  };
  video: {
    secure_url: string;
    public_id: string;
  };
  createdAt: string;
  updatedAt: string;
}
