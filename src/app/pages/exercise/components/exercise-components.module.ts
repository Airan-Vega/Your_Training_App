import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardWithImageComponent } from './card-with-image/card-with-image.component';

@NgModule({
  declarations: [CardWithImageComponent],
  imports: [CommonModule, IonicModule],
  exports: [CardWithImageComponent],
})
export class ExerciseComponentsModule {}
