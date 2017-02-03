# ng2-owl-carousel

## Installation

To install this library, run:

```bash
$ npm install ng2-owl-carousel --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { OwlModule } from 'ng2-owl-carousel';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use OwlCarousel component very easily in your Angular application:

```xml
<!-- You can use owl-carousel selector to include its component -->
 <owl-carousel  [options]="{items: 3, dots: false, navigation: false}"
     <!-- If images array is dynamically changing pass this array to [items] input -->
     [items]="images"
     <!-- classes to be attached along with owl-carousel class -->
     [carouselClasses]="['owl-theme', 'row', 'sliding']">
     <div class="item" *ngFor="let image of images;let i = index">
         <div class="thumbnail-image" [ngStyle]="{'background': 'url('abc.jpg')no-repeat scroll center center / 80px 80px'}"></div>
     </div>
 </owl-carousel>
```

To go to next slide use next() function of Component
To go to previous slide use previous()
To go to nth slide use to()
```xml
<owl-carousel #owlElement


```

```typescript
import {OwlCarousel} from 'ng2-owl-carousel';

export class HomeComponent {
@ViewChild('owlElement') owlElement: OwlCarousel


   fun() {
     this.owlElement.next([200])
     //duration 200ms
   }
}
```

## License

Copyright © 2014 Owl
Modified work Copyright 2016 David Deutsch
Modified work Copyright © 2017 Mujtaba Hussain
