import { Component } from '@angular/core';
import { Profile } from '../../model/profile';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { AccountPage } from '../../pages/account/account';

@Component({
  selector: 'profile-details-add',
  templateUrl: 'profile-details-add.html'
})
export class ProfileDetailsAddComponent {
  genders: any[] = [{ name: 'Male' }, { name: 'Female', }, { name: 'Can\'t say' }]
  profile: Profile;
  constructor(public firebaseService: FirebaseServiceProvider, public alertCtrl: AlertController,
    public navCtrl: NavController, params: NavParams) {
    this.profile = new Profile();
    this.profile.uid = params.data;
  }

  fileChange($event) {
    if ($event == null) return;
    var input = $event.target;
    var reader = new FileReader();
    reader.onload = function () {
      var dataURL = reader.result;
      var image = document.getElementById('listing-image');
      if (image) image.setAttribute('src', dataURL.toString());
    };
    reader.readAsDataURL(input.files[0]);
  }

  submit() {
    this.profile.image = document.getElementById('listing-image').getAttribute('src');
    this.firebaseService.add('/profile-details/', this.profile);
    this.alertCtrl.create({
      title: 'Profile Updated',
      buttons: ['OK']
    }).present();
    this.navCtrl.setRoot(AccountPage);
  }
}