import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { LoadingController } from 'ionic-angular';
import { map } from 'rxjs/operators';

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
    this.afd.list(url).snapshotChanges()
      .pipe(map(changes => changes
        .map(c => ({ key: c.payload.key, ...c.payload.val() }))))
      .subscribe((result) => {
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

  takeOrderBy(url: string, count: number, order: string, func: any) {
    var load = this.loadingCtrl.create({ spinner: 'dots' });
    load.present();
    this.afd.list(url, ref => ref.orderByChild(order).limitToFirst(count))
      .valueChanges()
      .subscribe(result => {
        load.dismiss();
        func(result);
      });
  }

  getIcon(url: string, func: any) {
    this.getNoLoad(url, (icon) => {
      func(icon.toString())
    });
  }

  getFiltered(url: string) {
    this.afd.list(url)
  }

  add(url: string, item: any) {
    return this.afd.list(url).push(item);
  }

  remove(url, id) {
    this.afd.list(url).remove(id);
  }
}
