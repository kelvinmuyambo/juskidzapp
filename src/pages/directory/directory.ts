import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { ListingItemAddComponent } from '../../components/listing-item-add/listing-item-add';
import { ListingItemDetailsComponent } from '../../components/listing-item-details/listing-item-details';
import { Listing } from '../../model/listing';
import { FilterItemTownComponent } from '../../components/filter-item-town/filter-item-town';


@IonicPage()
@Component({
  selector: 'page-directory',
  templateUrl: 'directory.html',
})
export class DirectoryPage {
  listings: Array<Listing>;
  user: firebase.User;
  filter: any;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,
    public firebaseService: FirebaseServiceProvider) {
    this.afAuth.authState.subscribe(user => this.user = user);
    this.retrieveListings();
  }

  retrieveListings() {
    this.filter = this.navParams.get('filter');
    if (this.filter) this.setListings(this.filter.data);
    else this.firebaseService.get('listing', (listings) => this.setListings(listings));
  }

  setListings(listings: Array<any>) {
    this.listings = listings.filter(f => f.isActive)
      .sort(function (a, b) {
        var countA = a.likes ? a.likes.length : 0;
        var countB = b.likes ? b.likes.length : 0;
        return countB - countA;
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

  find() {
    this.firebaseService.get('listing', (listings) =>
      this.navCtrl.push(FilterItemTownComponent, { items: listings, type: 'listing' }));
  }
}