import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { Profile } from '../../model/profile';
import { ProfileDetailsAddComponent } from '../profile-details-add/profile-details-add';


@Component({
  selector: 'profile-details',
  templateUrl: 'profile-details.html'
})
export class ProfileDetailsComponent {
  profile: Profile;
  uid: string;
  constructor(public navCtrl: NavController, params: NavParams, private firebaseService: FirebaseServiceProvider) {
    this.uid = params.data;
    this.getProfile();
  }

  getProfile() {
    this.firebaseService.get('/profile-details/', (profiles: Profile[]) =>
      this.profile = profiles.find(f => f.uid == this.uid));
  }

  updateProfile() {
    this.navCtrl.push(ProfileDetailsAddComponent, this.uid);
  }
}