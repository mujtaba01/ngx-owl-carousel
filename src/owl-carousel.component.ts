import {Component, ViewChild, Input, IterableDiffers, ChangeDetectorRef, IterableDiffer, DoCheck} from '@angular/core';
import {OwlChild} from "./owl-child.component";

@Component({
  selector: 'owl-carousel',
  template:
  '<div *ngIf="show">' +
  '<owl-carousel-child #owl [ngClass]="carouselClasses" [options]="options">' +
  '<ng-content></ng-content></owl-carousel-child></div>'
})

//sortLayoutImages

export class OwlCarousel implements DoCheck {
  @ViewChild('owl') $owlChild: OwlChild;
  @Input() carouselClasses: any = "";
  @Input() options: any = {};
  private itemsCollection: any;
  private differ:IterableDiffer;
  show: boolean = true;
  
  constructor(private changeDetector:ChangeDetectorRef,
              private differs:IterableDiffers) {
  }

  @Input() set owlItems(coll :any[]) {
    this.itemsCollection = coll;
    if (coll && !this.differ) {
      this.differ = this.differs.find(coll).create(this.changeDetector);
    }
  }

  ngDoCheck() {
    if(this.differ) {
      const changes = this.differ.diff(this.itemsCollection);
      if (changes) {
        var changed = false;
        changes.forEachAddedItem(() => {
          changed = true;
        });
        changes.forEachRemovedItem(() => {
          changed = true;
        });
        if (changed) {
          this.refresh();
        }
      }
    }
  }
  
  refresh() {
    this.show = false;
    setTimeout(()=>{
      this.show = true;
    }, 0);
  }

  next() {
    this.$owlChild.next();
  }

  previous() {
    this.$owlChild.previous();
  }
}