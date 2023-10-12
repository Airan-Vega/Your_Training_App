import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { ExerciseService } from 'src/app/exercise/services/exercise.service';
import { Exercise } from 'src/app/exercise/models';
import {
  FooterProps,
  InfiniteScrollProps,
} from 'src/app/shared/components/models';

@Component({
  selector: 'app-list-exercise',
  templateUrl: './list-exercise.page.html',
  styleUrls: ['./list-exercise.page.scss'],
})
export class ListExercisePage implements OnInit {
  private subscription: Subscription;
  private page = 1;
  public footerProps: FooterProps = {
    currentUrl: '/exercise/list-exercise',
  };
  public exercises: Exercise[] = [];
  public isLoading = true;
  public props: InfiniteScrollProps = {
    threshold: '25%',
    position: 'bottom',
    loadingSpinner: 'bubbles',
    loadingText: 'Cargando más ejercicios...',
    currentPage: this.page,
    getDatas: (currentPage: number) => this.getExercises(currentPage),
  };

  constructor(
    private exerciseService: ExerciseService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getExercises(this.page);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getExercises(page: number) {
    this.subscription = this.exerciseService
      .getExercises(page)
      .subscribe((exercise) => {
        this.props.totalPages = exercise.totalPages;
        this.exercises = [...this.exercises, ...exercise.exercises];
        this.isLoading = false;
      });
  }

  public goToExerciseDetail(id: string) {
    this.router.navigateByUrl(`/exercise/exercise-detail/${id}`);
  }
}
