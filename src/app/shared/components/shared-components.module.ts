import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    CardComponent,
  ],
  imports: [CommonModule, IonicModule],
  exports: [HeaderComponent, FooterComponent, SpinnerComponent, CardComponent],
})
export class SharedComponentsModule {}
