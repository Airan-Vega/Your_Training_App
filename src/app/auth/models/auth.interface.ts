export interface Login {
  ok: boolean;
  user: User;
}
interface User {
  uid: string;
  fullName: string;
  email: string;
  image: Image;
  role: string;
  active: boolean;
  token: string;
}

interface Image {
  secure_url: string;
  public_id: string;
}
