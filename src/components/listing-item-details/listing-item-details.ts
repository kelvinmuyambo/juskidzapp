import { Component } from '@angular/core';
import { Listing } from '../../model/listing';
import { NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { ListingImage } from '../../model/listing-image';

@Component({
  selector: 'listing-item-details',
  templateUrl: 'listing-item-details.html'
})
export class ListingItemDetailsComponent {
  listingDetails: any = {};
  listing: Listing;
  images: Array<any> = [];
  constructor(params: NavParams, public firebaseService: FirebaseServiceProvider) {
    this.listing = params.data.listing;
    console.log(this.listing);
    this.loadImages();
  }

  loadImages() {
    this.listing.images.forEach(image => {
      this.firebaseService.get('/listing-image/' + image.data)
        .valueChanges()
        .subscribe(r => {
          this.images.push(new ListingImage(r.toString()));
        });
    })
  }
}