import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.page.html',
  styleUrls: ['./list-user.page.scss'],
})
export class ListUserPage implements OnInit {
  constructor(
    private authService: AuthService,
    private navController: NavController
  ) {}

  ngOnInit() {}

  public logout() {
    this.authService.logout();
    this.navController.navigateRoot('/login', { animated: true });
  }
}
