import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StarRatingComponent } from './star-rating/star-rating.component';
import { StarComponent } from './star/star.component';



@NgModule({
  declarations: [
    StarRatingComponent,
    StarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarRatingComponent,
    StarComponent
  ]
})
export class StarRatingModule { }
