import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseServiceProvider } from '../../providers/firebase-service';


@IonicPage()
@Component({
  selector: 'page-directory',
  templateUrl: 'directory.html',
})
export class DirectoryPage {
  listings: Array<any>;
  user: firebase.User;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,
    public firebaseService: FirebaseServiceProvider) {
    this.afAuth.authState.subscribe(user => this.user = user);
    this.getListings();
  }

  getListings() {
    this.firebaseService.afd.list<any>('listing')
      .valueChanges()
      .subscribe(listings => {
        this.listings = listings;
      });
  }

  openListingDetails(event) {
  }
}