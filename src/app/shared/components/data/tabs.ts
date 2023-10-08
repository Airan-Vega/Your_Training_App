import { Tabs } from '../models';

export const tabs: Tabs[] = [
  {
    path: '/user/list-user',
    icon: 'people-outline',
    title: 'Usuarios',
    roles: ['administrator', 'monitor'],
  },
  {
    path: '/exercise/list-exercise',
    icon: 'barbell-outline',
    title: 'Ejercicios',
    roles: ['monitor'],
  },
  {
    path: '/training/list-training',
    icon: 'accessibility-outline',
    title: 'Entrenamiento',
    roles: ['monitor', 'user'],
  },
  {
    path: '/user/profile',
    icon: 'person-circle-outline',
    title: 'Pérfil',
    roles: ['administrator', 'monitor', 'user'],
  },
];
