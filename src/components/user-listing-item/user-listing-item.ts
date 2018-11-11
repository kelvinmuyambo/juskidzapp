import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { AlertController } from 'ionic-angular';
import { Listing } from '../../model/listing';

@Component({
  selector: 'user-listing-item',
  templateUrl: 'user-listing-item.html'
})
export class UserListingItemComponent {
  @Input() listing: Listing;
  @Output() makePayment = new EventEmitter<any>();
  icon: string;
  constructor(private firebaseService: FirebaseServiceProvider, public alertCtrl: AlertController) {

  }

  ngOnInit(): void {
    this.getIcon();
  }

  getIcon(): any {
    this.firebaseService.getIcon('/listing-image/' + this.listing.image, (icon) => this.icon = icon);
  }

  toggle() {
    this.firebaseService.afd.object('/listing/' + this.listing.key)
      .update({ isActive: !this.listing.isActive }).then(result => {
        const action: string = !this.listing.isActive ? ' activated' : ' de-activated';
        this.alertCtrl.create({
          subTitle: this.listing.title + action,
          buttons: ['OK']
        }).present();
      });
  }

  pay() {
    this.listing.image = this.icon;
    this.makePayment.emit({
      type: 1,
      details: this.listing
    })
  }
}