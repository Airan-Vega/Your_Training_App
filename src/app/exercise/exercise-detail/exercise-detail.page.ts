import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';

import { ExerciseService } from '../services/exercise.service';
import { Exercise } from '../models';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.page.html',
  styleUrls: ['./exercise-detail.page.scss'],
})
export class ExerciseDetailPage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('videoElement') videoElement: ElementRef;
  videoReady: EventEmitter<any> = new EventEmitter();
  private getExercisesSubscription: Subscription;
  private videoReadySubscription: Subscription;
  public exercise: Exercise;
  public isLoading: boolean = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private exerciseService: ExerciseService,
    private screenOrientation: ScreenOrientation
  ) {}

  ngOnInit() {
    this.getExercise();
  }

  ngAfterViewInit() {
    this.videoReadySubscription = this.videoReady.subscribe(() => {
      this.videoElement.nativeElement.addEventListener(
        'fullscreenchange',
        this.handleFullscreenChange.bind(this)
      );
    });
  }

  ngOnDestroy(): void {
    this.getExercisesSubscription?.unsubscribe();
    this.videoReadySubscription?.unsubscribe();
    this.videoElement.nativeElement.removeEventListener(
      'fullscreenchange',
      this.handleFullscreenChange.bind(this)
    );
  }

  private handleFullscreenChange() {
    if (document.fullscreenElement) {
      this.screenOrientation.lock(
        this.screenOrientation.ORIENTATIONS.LANDSCAPE
      );
    } else {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
  }

  public getExercise() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.getExercisesSubscription = this.exerciseService
        .getExercise(id)
        .subscribe((exercise) => {
          this.exercise = exercise;
          this.isLoading = false;
        });
    }
  }

  public onVideoReady() {
    this.videoReady.emit();
  }
}
