import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { NavController } from 'ionic-angular';
import { PaymentMakePaymentComponent } from '../payment-make-payment/payment-make-payment';

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
  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public firebaseService: FirebaseServiceProvider) {
    this.getListings();
    this.getEvents();
  }

  ngOnInit(): void {
  }

  logout() {
    this.loading = true;
    this.afAuth.auth.signOut();
    this.result.emit(null);
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
}