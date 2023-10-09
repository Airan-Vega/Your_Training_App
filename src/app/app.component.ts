import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationService } from './shared/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.navigationService.closeApp();
  }

  ngOnDestroy() {
    this.navigationService.destroy();
  }
}
