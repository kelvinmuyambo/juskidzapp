import { Component, Input } from '@angular/core';
import { Listing } from '../../model/listing';
import { FirebaseServiceProvider } from '../../providers/firebase-service';

@Component({
  selector: 'user-listing-item',
  templateUrl: 'user-listing-item.html'
})
export class UserListingItemComponent {
  @Input() listing: Listing;
  icon: string;
  constructor(private firebaseService: FirebaseServiceProvider) {

  }

  ngOnInit(): void {
    this.getIcon();
  }

  getIcon(): any {
    this.firebaseService.getIcon('/listing-image/' + this.listing.image, (icon) => this.icon = icon);
  }

  toggle() {
    
  }
}
