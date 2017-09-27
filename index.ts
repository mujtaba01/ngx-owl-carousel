import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OwlCarousel} from './src/owl-carousel.component';
import {OwlChild} from './src/owl-child.component';
export * from './src/owl-carousel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OwlCarousel, OwlChild
  ],
  exports: [
    OwlCarousel
  ]
})
export class OwlModule {
}
