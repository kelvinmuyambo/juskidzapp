import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { NavController } from 'ionic-angular';
import { PaymentMakePaymentComponent } from '../payment-make-payment/payment-make-payment';
import { ProfileDetailsComponent } from '../profile-details/profile-details';
import { Profile } from '../../model/profile';

@Component({
  selector: 'account-user-details',
  templateUrl: 'account-user-details.html'
})
export class AccountUserDetailsComponent {
  @Input() profile: firebase.User;
  @Output() result = new EventEmitter<any>();
  loading: boolean;
  listings: any;
  events: any;
  profileDetails: Profile;
  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public firebaseService: FirebaseServiceProvider) {
    this.getListings();
    this.getEvents();
    this.getProfile();
  }

  ngOnInit(): void {
  }

  logout() {
    this.loading = true;
    this.afAuth.auth.signOut();
    this.result.emit(null);
  }

  getProfile() {
    this.firebaseService.get('/profile-details/', (profiles: Profile[]) =>
      this.profileDetails = profiles.find(f => f.uid == this.profile.uid));
  }

  getListings() {
    this.firebaseService.get('listing', (listings) =>
      this.listings = listings.filter(f => f.uid == this.profile.uid));
  }

  getEvents() {
    this.firebaseService.get('event', (events) =>
      this.events = events.filter(f => f.uid == this.profile.uid));
  }

  makePayment($event) {
    this.navCtrl.push(PaymentMakePaymentComponent, $event);
  }

  openProfile() {
    this.navCtrl.push(ProfileDetailsComponent, this.profile.uid);
  }
}