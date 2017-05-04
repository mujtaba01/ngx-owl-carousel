# angular-owl-carousel

## Dependencies

This Library requires jquery to be installed globally

For commonJs based application load jquery using script loader or use link tag in html file

Install script-loader if you don't have already
```bash
npm install script-loader
```

and in vendor.ts
```js
require('script!jquery');
```

OR

```html
<script type="application/javascript" src="path-to-jquery.js"></script>
```

If using angular-cli

Add this to angular cli-json file

```json
"scripts": [
"../node_modules/jquery/dist/jquery.js"
]
```


## Installation

To install this library, run:

```bash
$ npm install angular-owl-carousel --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { OwlModule } from 'angular-owl-carousel';

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
 <owl-carousel
     [options]="{items: 3, dots: false, navigation: false}"
     <!-- If images array is dynamically changing pass this array to [items] input -->
     [items]="images"
     <!-- classes to be attached along with owl-carousel class -->
     [carouselClasses]="['owl-theme', 'row', 'sliding']">
     <div class="item" *ngFor="let image of images;let i = index">
         <div class="thumbnail-image" [ngStyle]="{'background': 'url('abc.jpg')no-repeat scroll center center / 80px 80px'}"></div>
     </div>
 </owl-carousel>
```
## APIs
1. next(options?: any[])
  
  To go to next slide. Animation time can be passed as options array.
  E.g. this.owlElement.next([200]). (200ms animation time).

2. previous(options?: any[])
  
  To go to previous slide. (arguments are similar)

3. to(options?: any[])
  
  To go to nth slide. (arguments are similar)

4. trigger(action: string, options?: any[])
  
  To trigger any jquery owl carousel's action. options can be passed accordingly.

5. refresh()
  
  After doing some changes in owl component's options this function can be used to refresh owl component

```html
<owl-carousel #owlElement


```

```typescript
import {OwlCarousel} from 'angular-owl-carousel';

export class HomeComponent {
@ViewChild('owlElement') owlElement: OwlCarousel


   fun() {
     this.owlElement.next([200])
     //duration 200ms
   }
}
```

## License

This project is licensed under the terms of the MIT license.
