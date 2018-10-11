import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { ListingItemAddComponent } from '../../components/listing-item-add/listing-item-add';
import { ListingItemDetailsComponent } from '../../components/listing-item-details/listing-item-details';
import { Listing } from '../../model/listing';


@IonicPage()
@Component({
  selector: 'page-directory',
  templateUrl: 'directory.html',
})
export class DirectoryPage {
  listings: Array<Listing>;
  user: firebase.User;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,
    public firebaseService: FirebaseServiceProvider) {
    this.afAuth.authState.subscribe(user => this.user = user);
    this.getListings();
  }

  getListings() {
    this.firebaseService.get('listing', (listings: Array<Listing>) => {
      this.listings = listings.filter(f => f.isActive);
    });
  }

  openListingDetails(listing) {
    this.navCtrl.push(ListingItemDetailsComponent, { listing: listing });
    return;
  }

  addNew() {
    this.navCtrl.push(ListingItemAddComponent);
    return;
  }
}