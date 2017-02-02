import {OnDestroy, Component, Input, ElementRef} from "@angular/core";
declare var $:any;

@Component({
    selector: 'owl-carousel-child',
    template: '<ng-content></ng-content>'
})
export class OwlChild  implements OnDestroy {
    $owl: any;
    @Input() options: any = {};

    constructor(private el: ElementRef) {}

    ngAfterViewInit() {
        this.$owl = $(this.el.nativeElement).owlCarousel(this.options);
    }

    next() {
        this.$owl.trigger('next.owl.carousel');
    }

    previous() {
        this.$owl.trigger('prev.owl.carousel');
    }

    ngOnDestroy() {
        this.$owl.trigger('destroy.owl.carousel').removeClass('owl-loaded');
        delete this.$owl;
    }
}