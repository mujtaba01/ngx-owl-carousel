import {OnDestroy, Component, Input, ElementRef, HostBinding} from "@angular/core";
declare var $: any,jQuery: any;
@Component({
    selector: 'owl-carousel-child',
    template: '<ng-content></ng-content>'
})
export class OwlChild  implements OnDestroy {
    @HostBinding('class.owl-carousel') owlClass = true;
    $owl: any;
    @Input() options: any = {};

    constructor(private el: ElementRef) {
        $ = $ || jQuery;
    }

    ngAfterViewInit() {
        if($) {
            this.$owl = $(this.el.nativeElement).owlCarousel(this.options);
        }
    }

    trigger(action: string, options?: any[]) {
        this.$owl.trigger(action, options)
    }

    ngOnDestroy() {
        this.$owl.trigger('destroy.owl.carousel').removeClass('owl-loaded');
        delete this.$owl;
    }
}