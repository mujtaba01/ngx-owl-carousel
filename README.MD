# ngx-owl-carousel

## Dependencies

This Library requires jquery and owl.carousel to be installed globally

For commonJs based application load jquery and owl.carousel using script loader or use link tag in html file

Install script-loader if you don't have already
```bash
npm install script-loader
```

and in vendor.ts
```js
require('script!jquery');
require('script!owl.carousel');
```

OR

inside index.html put this inside the head tag
```html
<script type="application/javascript" src="/node_modules/jquery/dist/jquery.js"></script>
<script type="application/javascript" src="/node_modules/owl.carousel/dist/owl.carousel.js"></script>
```

If using angular-cli

Add this to angular-cli.json file

```json
"scripts": [
    "../node_modules/jquery/dist/jquery.js",
    "../node_modules/owl.carousel/dist/owl.carousel.js"
]
```


## Installation

To install this library, run:

```bash
$ npm install ngx-owl-carousel --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { OwlModule } from 'ngx-owl-carousel';

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

## Import required css files

Include these two css files

1. owl.carousel.css file
This is required css files.

2. owl.theme.default file
This file is optional. However to use default navigation controls or dots buttons this file is necessary.

Inside angular-cli.json add these lines:

```json
"styles": [
    "../node_modules/owl.carousel/dist/assets/owl.carousel.css",
    "../node_modules/owl.carousel/dist/assets/owl.theme.default.css"
]
```

OR include these files in main scss file.
```scss
import "~owl.carousel/dist/assets/owl.carousel.css";
import "~owl.carousel/dist/assets/owl.theme.default.css";
```

OR include these files in index.html file inside head tag.

```html
    <link rel="stylesheet" href="/node_modules/owl.carousel/dist/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="/node_modules/owl.carousel/dist/assets/owl.theme.default.min.css">
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

Note: Please remove comments from the above example else you will get errors.

## Angular  Universal Integration

This package is a wrapper for the jquery library owl.carousel. Jquery is not supported in Angular Universal currently. Therefore the carousel cannot be rendered server side. However if you are using angular universal, do not include owl.carousel ("/node_modules/owl.carousel/dist/owl.carousel.js") in server side configuration.

## APIs
1. next(options?: any[]) 
    - To go to next slide. Animation time can be passed as options array. 
    E.g. this.owlElement.next([200]). (200ms animation time).
2. previous(options?: any[])
    - To go to previous slide. (arguments are similar)
    
3. to(options?: any[])
    - To go to nth slide. (arguments are similar)

4. trigger(action: string, options?: any[])
    - To trigger any jquery owl carousel's action. options can be passed accordingly.

```html
<owl-carousel #owlElement

```

```typescript
import {OwlCarousel} from 'ngx-owl-carousel';

export class HomeComponent {
@ViewChild('owlElement') owlElement: OwlCarousel


   fun() {
     this.owlElement.next([200])
     //duration 200ms
   }
}
```

### Callbacks

All callbacks listed in native owl carousel's documentation https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html can be used in options properties.

Callbacks list:
* onInitialize
* onInitialized
* onResize
* onResized
* onDrag
* onDragged
* onTranslate
* onTranslated
* onChange
* onChanged
* onLoadLazy
* onLoadedLazy
* onPlayVideo
* onStopVideo



## License

This project is licensed under the terms of the MIT license.
