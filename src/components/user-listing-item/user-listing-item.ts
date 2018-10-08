import { Component, Input } from '@angular/core';
import { FirebaseServiceProvider } from '../../providers/firebase-service';

@Component({
  selector: 'user-listing-item',
  templateUrl: 'user-listing-item.html'
})
export class UserListingItemComponent {
  @Input() listing: any;
  icon: string;
  constructor(private firebaseService: FirebaseServiceProvider) {

  }

  ngOnInit(): void {
    this.getIcon();
    console.log(this.listing);
  }

  getIcon(): any {
    this.firebaseService.getIcon('/listing-image/' + this.listing.image, (icon) => this.icon = icon);
  }

  toggle() {
    // this.firebaseService.afd.object('/listing/' + this.listing.$key)
    //   .update({ isActive: !this.listing.isActive }).then(console.log);
  }
}