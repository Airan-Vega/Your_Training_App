import { Component, OnInit } from '@angular/core';
import { Roles, Tabs } from './models';
import { tabs } from './data';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
})
export class TabsPage implements OnInit {
  public tabs: Tabs[];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const role = this.authService.role as Roles;
    this.tabs = tabs.filter((tab) => tab.roles.includes(role));
  }
}
