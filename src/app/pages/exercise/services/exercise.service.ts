import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Exercise, Exercises } from '../models';

const apiUrl: string = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  constructor(private httpClient: HttpClient) {}

  getExercises(): Observable<Exercises> {
    return this.httpClient.get<Exercises>(`${apiUrl}/exercise?from=0&limit=10`);
  }

  getExercise(id: string): Observable<Exercise> {
    return this.httpClient
      .get(`${apiUrl}/exercise/searchById/${id}`)
      .pipe(map((resp: any) => resp.exercise));
  }
}
