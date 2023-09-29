import { Tabs } from '../models';

export const tabs: Tabs[] = [
  {
    path: 'list-user',
    icon: 'people-outline',
    title: 'Usuarios',
    roles: ['administrator', 'monitor'],
  },
  {
    path: 'list-exercise',
    icon: 'barbell-outline',
    title: 'Ejercicios',
    roles: ['monitor'],
  },
  {
    path: 'list-training',
    icon: 'accessibility-outline',
    title: 'Entrenamiento',
    roles: ['monitor', 'user'],
  },
  {
    path: 'profile',
    icon: 'person-circle-outline',
    title: 'Pérfil',
    roles: ['administrator', 'monitor', 'user'],
  },
];
