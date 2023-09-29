type Role = 'user' | 'monitor' | 'administrator';
export interface User {
  uid: string;
  fullName: string;
  email: string;
  image: {
    secure_url: string;
    public_id: string;
  };
  role: Role;
  active: boolean;
  token: string;
}
