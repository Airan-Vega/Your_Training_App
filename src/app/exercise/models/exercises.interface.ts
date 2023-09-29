import { Exercise } from './exercise.interface';

export interface Exercises {
  ok: boolean;
  page: number;
  totalItems: number;
  totalPages: number;
  exercises: Exercise[];
}
