import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ListUserPageRoutingModule } from './list-user-routing.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

import { ListUserPage } from './list-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListUserPageRoutingModule,
    SharedComponentsModule,
  ],
  declarations: [ListUserPage],
})
export class ListUserPageModule {}
