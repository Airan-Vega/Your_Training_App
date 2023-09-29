import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';

import { ListUserPageRoutingModule } from './list-user-routing.module';

import { ListUserPage } from './list-user.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ListUserPageRoutingModule],
  declarations: [ListUserPage],
  providers: [ScreenOrientation],
})
export class ListUserPageModule {}
