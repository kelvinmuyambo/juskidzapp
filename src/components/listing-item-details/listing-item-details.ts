import { Component } from '@angular/core';
import { Listing } from '../../model/listing';
import { NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { ListingImage } from '../../model/listing-image';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'listing-item-details',
  templateUrl: 'listing-item-details.html'
})
export class ListingItemDetailsComponent {
  user: firebase.User;
  listingDetails: any = {};
  listing: Listing;
  images: Array<any> = [];
  constructor(private aufAuth: AngularFireAuth, params: NavParams, public firebaseService: FirebaseServiceProvider) {
    this.listing = params.data.listing;
    this.aufAuth.authState.subscribe(r => this.user = r);
    this.loadImages();
  }

  loadImages() {
    this.listing.images.forEach(image => {
      this.firebaseService.getNoLoad('/listing-image/' + image.data, (r) =>
        this.images.push(new ListingImage(r.toString())))
    })
  }

  getRating(type: string): number {
    return this.listing ? this.listing[type] ? this.listing[type].length : 0 : 0;
  }

  hasRating(): boolean {
    if (this.user == null || this.listing == null) return true;
    return this.hasRatingByType('likes') || this.hasRatingByType('dislikes');
  }

  hasRatingByType(type: string): boolean {
    return this.listing[type] ?
      this.listing[type].find(f => f == this.user.uid) :
      false;
  }

  rate(type: string): void {
    this.firebaseService.afd.object('/listing/' + this.listing.key)
      .update(this.getRate(type)).then(result => {
      });
  }

  getRate(type: string): any {
    if (this.listing[type]) this.listing[type].push(this.user.uid);
    else this.listing[type] = [this.user.uid];
    var rating = this.listing[type];
    if (type == 'likes') return { likes: rating }
    return { dislikes: rating };
  }

  comment: string = '';
  submit() {
    this.firebaseService.afd.object('/listing/' + this.listing.key)
      .update(this.getComment()).then(result => {
      });
  }

  getComment() {
    var comment = {
      user: {
        uid: this.user.uid,
        name: this.user.displayName
      },
      comment: this.comment,
      date : new Date()
    };
    this.comment = '';
    if (this.listing.comments) this.listing.comments.push(comment);
    else this.listing.comments = [comment];
    return { comments: this.listing.comments };
  }
}