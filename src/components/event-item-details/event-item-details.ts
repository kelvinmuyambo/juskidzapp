import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { ListingImage } from '../../model/listing-image';

@Component({
  selector: 'event-item-details',
  templateUrl: 'event-item-details.html'
})
export class EventItemDetailsComponent {
  event: any;
  images: Array<any> = [];
  constructor(params: NavParams, private firebaseService: FirebaseServiceProvider) {
    this.event = params.data.event;
    this.loadImages();
  }

  loadImages() {
    this.event.images.forEach(image => {
      this.firebaseService.getNoLoad('/event-image/' + image.data, (r) =>
        this.images.push(new ListingImage(r.toString())))
    })
  }
}