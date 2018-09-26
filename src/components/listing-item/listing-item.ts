import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'listing-item',
  templateUrl: 'listing-item.html'
})
export class ListingItemComponent {
  @Input() listing: any;
  @Output() result = new EventEmitter<any>();
  constructor() {
  }

  ngOnInit(): void {
  }

  view() {
    this.result.emit(this.listing);
  }
}