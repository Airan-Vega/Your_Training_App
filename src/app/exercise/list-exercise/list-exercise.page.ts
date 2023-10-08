import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { ExerciseService } from 'src/app/exercise/services/exercise.service';
import { Exercise } from 'src/app/exercise/models';
import { FooterProps } from 'src/app/shared/components/models';

@Component({
  selector: 'app-list-exercise',
  templateUrl: './list-exercise.page.html',
  styleUrls: ['./list-exercise.page.scss'],
})
export class ListExercisePage implements OnInit {
  private subscription: Subscription;
  public footerProps: FooterProps = {
    currentUrl: '/exercise/list-exercise',
  };
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
    this.subscription.unsubscribe();
  }

  getExercise() {
    this.subscription = this.exerciseService
      .getExercises()
      .subscribe((exercise) => {
        this.exercises = exercise.exercises;
        this.isLoading = false;
      });
  }

  goToExerciseDetail(id: string) {
    this.router.navigateByUrl(`/exercise/exercise-detail/${id}`);
  }
}
