export type Roles = 'administrator' | 'monitor' | 'user';
export interface Tabs {
  path: string;
  icon: string;
  title: string;
  roles: Roles[];
}
