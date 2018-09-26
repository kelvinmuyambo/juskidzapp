import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class FirebaseServiceProvider {

  constructor(public afd: AngularFireDatabase) { }

  getCountries() {
    return this.afd.list('/country/').valueChanges().subscribe(console.log);
  }

  get(url: string) {
    return this.afd.list(url);
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
