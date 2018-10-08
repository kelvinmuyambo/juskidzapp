import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Listing } from '../../model/listing';
import { FirebaseServiceProvider } from '../../providers/firebase-service';

@Component({
  selector: 'account-user-details',
  templateUrl: 'account-user-details.html'
})
export class AccountUserDetailsComponent {
  @Input() profile;
  @Output() result = new EventEmitter<any>();
  loading: boolean;
  listings: Array<Listing>;
  constructor(private afAuth: AngularFireAuth, public firebaseService: FirebaseServiceProvider) {
    this.getListings();
  }

  ngOnInit(): void {
  }

  logout() {
    this.loading = true;
    this.afAuth.auth.signOut();
    this.result.emit(null);
  }

  getListings() {
    // this.afAuth.user.subscribe(result => console.log(result));
    this.firebaseService.get('listing', (listings) => {
      console.log(listings, this.listings);
      // this.listings = listings;
    });
  }
}