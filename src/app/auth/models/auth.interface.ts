import { User } from 'src/app/user/models';

export interface Auth {
  ok: boolean;
  user: User;
}
