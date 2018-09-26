import { Component, Output, EventEmitter } from '@angular/core';
import { AccountAnonymousLoginComponent } from '../account-anonymous-login/account-anonymous-login';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'account-anonymous',
  templateUrl: 'account-anonymous.html'
})
export class AccountAnonymousComponent {
  @Output() result = new EventEmitter<any>();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  register() {
    // this.navCtrl.push(AccountRegisterComponent, { callback: this.refresh });
  }

  login() {
    this.navCtrl.push(AccountAnonymousLoginComponent, { callback: this.refresh });
  }

  refresh: any = () => {
    this.result.emit(null);
    this.navCtrl.popToRoot();
  };
}
