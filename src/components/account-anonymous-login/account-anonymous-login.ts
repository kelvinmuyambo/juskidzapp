import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import firebase from 'firebase';
import { AccountPage } from '../../pages/account/account';

@Component({
  selector: 'account-anonymous-login',
  templateUrl: 'account-anonymous-login.html'
})
export class AccountAnonymousLoginComponent {
  login: any = {};
  callback: any;
  loading: boolean;
  user: firebase.User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    private gplus: GooglePlus, private platform: Platform) {
    this.callback = navParams.get('callback');
    this.afAuth.authState.subscribe(user => this.user = user);
  }

  openAlert(title: string, message: string) {
    this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  async loginViaGoogle(result) {
    const googleCredential = firebase.auth.GoogleAuthProvider
      .credential(result.idToken);
    firebase.auth().signInWithCredential(googleCredential)
      .then(response => {
        this.navCtrl.setRoot(AccountPage);
      }).catch(err => {
        this.openAlert('Error 02', JSON.stringify(err));
        console.error(err);
      });
  }

  async nativeGoogleLogin() {
    try {
      this.gplus.login({
        'webClientId': '47521912671-rh8optei2mogqljg9escuh5fe1pmm964.apps.googleusercontent.com',
        'offline': true
      }).then(result => {
        this.loginViaGoogle(result);
      }).catch(err => {
        this.openAlert('Error', JSON.stringify(err));
        console.error(err);
      });
    } catch (err) {
      this.openAlert('Exception', err.message);
    }
  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      this.navCtrl.setRoot(AccountPage);
    } catch (err) {
      console.log(err);
    }

  }

  async googleLogin() {
    this.loading = true;
    if (this.platform.is('cordova')) {
      await this.nativeGoogleLogin();
    } else {
      await this.webGoogleLogin();
    }
    this.loading = false;
  }

  async submit() {
    this.loading = true;
    await this.afAuth.auth.signInWithEmailAndPassword(this.login.email, this.login.password);
    this.loading = false;
    this.navCtrl.setRoot(AccountPage);
  }
}