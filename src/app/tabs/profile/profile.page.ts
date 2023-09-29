import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor(
    private authService: AuthService,
    private navController: NavController
  ) {}

  ngOnInit() {}

  public logout() {
    this.authService.logout();
    this.navController.navigateRoot('/auth/login', { animated: true });
  }
}
