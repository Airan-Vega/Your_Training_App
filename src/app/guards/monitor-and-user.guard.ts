import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class MonitorAndUserGuard implements CanActivate {
  constructor(private navController: NavController, private storage: Storage) {}
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const role = await this.storage.get('role');
    if (role === 'monitor' || role === 'user') {
      return true;
    } else {
      this.navController.navigateRoot('/list-training', { animated: true });
      return false;
    }
  }
}
