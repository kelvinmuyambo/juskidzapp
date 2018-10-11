import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Listing } from '../../model/listing';
import { FirebaseServiceProvider } from '../../providers/firebase-service';

@Component({
  selector: 'listing-item',
  templateUrl: 'listing-item.html'
})
export class ListingItemComponent {
  icon: string;
  @Input() listing: Listing;
  @Output() result = new EventEmitter<any>();
  iconLoaded: boolean;
  listingDetails: any;
  constructor(private firebaseSvc: FirebaseServiceProvider) {
  }

  ngOnInit(): void {
    this.listingDetails = this.listing;
    this.getIcon();
  }

  getIcon() {
    this.firebaseSvc.getNoLoad('/listing-image/' + this.listing.image, (icon) => {
      this.icon = icon.toString();
      this.listingDetails.image = this.icon;
      this.iconLoaded = true;
    });
  }

  view() {
    if (!this.iconLoaded) return;
    this.result.emit(this.listingDetails);
  }
}