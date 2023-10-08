import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { tabs } from '../data/tabs';
import { FooterProps, Tabs } from '../models';
import { AuthService } from '../../../auth/services/auth.service';
import { Role } from 'src/app/user/models';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() props: FooterProps = {
    currentUrl: undefined,
  };
  private userRole: Role = this.authService.role;
  public tabList: Tabs[];
  constructor(
    private navController: NavController,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.getTabs();
  }

  public navigateTab(url: string) {
    this.navController.navigateRoot(url);
  }

  private getTabs() {
    if (this.userRole) {
      this.tabList = tabs.filter((tab) => tab.roles.includes(this.userRole));
    }
  }
}
