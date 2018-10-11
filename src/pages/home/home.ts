import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { DirectoryPage } from '../directory/directory';
import { EventsPage } from '../events/events';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  categories: any[];
  constructor(public navCtrl: NavController,
    public firebaseService: FirebaseServiceProvider) {
    this.getCategories();
  }

  ionViewDidLoad(): void {
  }

  getCategories() {
    this.firebaseService.take('listing-category', 5, (result) => this.categories = result);
  }

  gotoListings(){
    this.navCtrl.setRoot(DirectoryPage);
  }

  gotoEvents(){
    this.navCtrl.setRoot(EventsPage);
  }
}