import { User } from 'src/app/pages/user/models';

export interface Auth {
  ok: boolean;
  user: User;
}
