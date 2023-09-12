import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
})
export class PagesPage implements OnInit, OnDestroy {
  private subscription$: Subscription = new Subscription();
  constructor(private router: Router, private navController: NavController) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects;
        if (currentRoute === '/') {
          this.navController.navigateRoot('/user', { animated: true });
        }
      }
    });
  }
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
