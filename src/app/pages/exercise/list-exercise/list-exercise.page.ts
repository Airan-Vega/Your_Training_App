import { Component, OnDestroy, OnInit } from '@angular/core';
import { Exercise } from '../models';
import { ExerciseService } from '../services/exercise.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-exercise',
  templateUrl: './list-exercise.page.html',
  styleUrls: ['./list-exercise.page.scss'],
})
export class ListExercisePage implements OnInit, OnDestroy {
  private subscription$: Subscription;
  public exercises: Exercise[] = [];
  public isLoading = true;

  constructor(
    private exerciseService: ExerciseService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getExercise();
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  getExercise() {
    this.subscription$ = this.exerciseService
      .getExercises()
      .subscribe((exercise) => {
        this.exercises = exercise.exercises;
        this.isLoading = false;
      });
  }

  goToExerciseDetail(id: string) {
    this.router.navigateByUrl(`/exercise-detail/${id}`);
  }
}
