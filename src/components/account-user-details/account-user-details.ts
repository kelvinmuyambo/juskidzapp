import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'account-user-details',
  templateUrl: 'account-user-details.html'
})
export class AccountUserDetailsComponent {
  @Input() profile;
  @Output() result = new EventEmitter<any>();
  loading: boolean;
  constructor(private afAuth: AngularFireAuth) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.loading = true;
    this.afAuth.auth.signOut();
    this.result.emit(null);
  }
}