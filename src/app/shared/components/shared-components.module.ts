import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CardComponent } from './card/card.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';

@NgModule({
  declarations: [
    CardComponent,
    FooterComponent,
    HeaderComponent,
    InfiniteScrollComponent,
    SpinnerComponent,
  ],
  imports: [CommonModule, IonicModule],
  exports: [
    CardComponent,
    FooterComponent,
    HeaderComponent,
    InfiniteScrollComponent,
    SpinnerComponent,
  ],
})
export class SharedComponentsModule {}
