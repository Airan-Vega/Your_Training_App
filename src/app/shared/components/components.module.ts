import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [HeaderComponent, SpinnerComponent],
  imports: [CommonModule, IonicModule],
  exports: [HeaderComponent, SpinnerComponent],
})
export class ComponentsModule {}
