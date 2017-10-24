import {OnDestroy, Component, Input, ElementRef, HostBinding, NgZone} from "@angular/core";
declare var $: any,jQuery: any;
@Component({
    selector: 'owl-carousel-child',
    template: '<ng-content></ng-content>'
})
export class OwlChild  implements OnDestroy {
    @HostBinding('class.owl-carousel') owlClass = true;
    $owl: any;
    @Input() options: any = {};

    constructor(private el: ElementRef, private ngZone: NgZone) {
        $ = $ || jQuery;
    }

    ngAfterViewInit() {
        if((typeof window != 'undefined') && $ && typeof $.fn.owlCarousel == 'function') {
            this.$owl = $(this.el.nativeElement);
            this.ngZone.runOutsideAngular(()=>{
                this.$owl.owlCarousel(this.options);
            });
        }
    }

    trigger(action: string, options?: any[]) {
        if(this.$owl) {
            this.ngZone.runOutsideAngular(()=>{
                this.$owl.trigger(action, options);
            });
        }
    }

    ngOnDestroy() {
        if(this.$owl) {
            this.ngZone.runOutsideAngular(()=>{
                this.$owl.trigger('destroy.owl.carousel').removeClass('owl-loaded');
            });
            delete this.$owl;
        }
    }
}