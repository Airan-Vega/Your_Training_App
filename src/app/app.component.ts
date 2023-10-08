import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { NavigationService } from './shared/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  constructor(private navigationService: NavigationService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['previousValue'] !== changes['currentValue']) {
      this.navigationService.closeApp();
    }
  }
  ngOnInit() {
    this.navigationService.closeApp();
  }

  ngOnDestroy() {
    this.navigationService.destroy();
  }
}
