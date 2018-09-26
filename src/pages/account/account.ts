import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseServiceProvider } from '../../providers/firebase-service';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  user: firebase.User;

  constructor(public navCtrl: NavController, private aufAuth: AngularFireAuth,
    public firebaseService: FirebaseServiceProvider) {
    this.getUserInformation();
  }

  ionViewDidLoad() {
  }

  getUserInformation() {
    this.aufAuth.authState.subscribe(r => this.user = r);
  }
}