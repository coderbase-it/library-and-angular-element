import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { StarRatingComponent, StarRatingModule } from 'projects/star-rating/src/public-api';



@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    StarRatingModule
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
      const elm = createCustomElement(StarRatingComponent, { injector: this.injector });
      customElements.define('star-rating', elm);
  }
 }


