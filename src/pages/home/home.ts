import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service';

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

  async getCategories() {
    this.firebaseService.afd.list<any>('listing-category')
      .valueChanges()
      .subscribe(r => this.categories = r);
  }

}
