import { Component, Output, EventEmitter } from '@angular/core';
import { AccountAnonymousLoginComponent } from '../account-anonymous-login/account-anonymous-login';
import { NavController, NavParams, AlertController, Platform, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { GooglePlus } from '@ionic-native/google-plus';
import firebase from 'firebase';
import { AccountPage } from '../../pages/account/account';


@Component({
  selector: 'account-anonymous',
  templateUrl: 'account-anonymous.html'
})
export class AccountAnonymousComponent {
  @Output() result = new EventEmitter<any>();
  loader = this.loadingController.create({ spinner: 'dots' });
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afAuth: AngularFireAuth, private loadingController: LoadingController,
    public alertCtrl: AlertController,
    private gplus: GooglePlus, private platform: Platform) {
  }

  register() {
    // this.navCtrl.push(AccountRegisterComponent, { callback: this.refresh });
  }

  login() {
    this.navCtrl.push(AccountAnonymousLoginComponent, { callback: this.refresh });
  }

  async loginViaGoogle(result) {
    const googleCredential = firebase.auth.GoogleAuthProvider
      .credential(result.idToken);
    firebase.auth().signInWithCredential(googleCredential)
      .then(response => {
        console.error(response);
        this.dismissLoader();
        this.navCtrl.setRoot(AccountPage);
      }).catch(err => {
        this.openAlert('Error', JSON.stringify(err));
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
      await this.afAuth.auth.signInWithPopup(provider);
      this.navCtrl.setRoot(AccountPage);
    } catch (err) {
      console.log(err);
    }
  }

  async googleLogin() {
    this.loader.present();
    if (this.platform.is('cordova')) {
      await this.nativeGoogleLogin();
    } else {
      await this.webGoogleLogin();
    }
  }

  dismissLoader() {
    try {
      this.loader.dismiss();
    } catch (e) { }
  }

  openAlert(title: string, message: string) {
    this.dismissLoader();
    this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  refresh: any = () => {
    this.result.emit(null);
    this.navCtrl.popToRoot();
  };
}