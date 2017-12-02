import {OnDestroy, Component, Input, ElementRef, HostBinding, OnInit} from "@angular/core";
declare var $: any,jQuery: any;
@Component({
    selector: 'owl-carousel-child',
    template: '<ng-content></ng-content>'
})
export class OwlChild  implements OnInit, OnDestroy {
    @HostBinding('class.owl-carousel') owlClass = true;
    $owl: any;
    @Input() options: any = {};

    constructor(private el: ElementRef) {
        $ = $ || jQuery;
    }

    ngOnInit() {
        if((typeof window != 'undefined') && $ && typeof $.fn.owlCarousel == 'function') {
            this.$owl = $(this.el.nativeElement);
        }
    }

    ngAfterViewInit() {
        this.initOwl();
    }

    initOwl() {
        if(this.$owl) {
            this.$owl.owlCarousel(this.options);
        }
    }

    trigger(action: string, options?: any[]) {
        if(this.$owl) {
            this.$owl.trigger(action, options);
        }
    }

    ngOnDestroy() {
        this.destroyOwl();
        delete this.$owl;
    }

    destroyOwl() {
        if(this.$owl) {
            this.$owl.trigger('destroy.owl.carousel').removeClass('owl-loaded');
        }
    }
}