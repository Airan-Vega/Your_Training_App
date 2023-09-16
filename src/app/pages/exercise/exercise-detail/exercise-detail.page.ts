import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ExerciseService } from '../services/exercise.service';
import { Exercise } from '../models';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.page.html',
  styleUrls: ['./exercise-detail.page.scss'],
})
export class ExerciseDetailPage implements OnInit, OnDestroy {
  private subscription$: Subscription;
  public exercise: Exercise;
  public isLoading: boolean = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private exerciseService: ExerciseService
  ) {}

  ngOnInit() {
    this.getExercise();
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  getExercise() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.subscription$ = this.exerciseService
        .getExercise(id)
        .subscribe((exercise) => {
          this.exercise = exercise;
          this.isLoading = false;
        });
    }
  }
}
