import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class FirebaseServiceProvider {

  constructor(public afd: AngularFireDatabase,
    public loadingCtrl: LoadingController) { }

  getNoLoad(url: string, func: any) {
    this.afd.list(url)
      .valueChanges()
      .subscribe(result => {
        func(result);
      });
  }

  get(url: string, func: any) {
    var load = this.loadingCtrl.create({ spinner: 'dots' });
    load.present();
    this.afd.list(url)
      .valueChanges()
      .subscribe(result => {
        load.dismiss();
        func(result);
      });
  }

  take(url: string, count: number, func: any) {
    var load = this.loadingCtrl.create({ spinner: 'dots' });
    load.present();
    this.afd.list(url, ref => ref.limitToFirst(count))
      .valueChanges()
      .subscribe(result => {
        load.dismiss();
        func(result);
      });
  }

  add(url: string, item: any) {
    return this.afd.list(url).push(item);
  }

  // getShoppingItems() {
  //   return this.afd.list('/shoppingItems/');
  // }

  // addItem(name) {
  //   this.afd.list('/shoppingItems/').push(name);
  // }

  // removeItem(id) {
  //   this.afd.list('/shoppingItems/').remove(id);
  // }
}
