import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Listing } from '../../model/listing';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'listing-item',
  templateUrl: 'listing-item.html'
})
export class ListingItemComponent {
  icon: string;
  @Input() listing: Listing;
  @Output() result = new EventEmitter<any>();
  iconLoaded: boolean;
  listingDetails: any;
  constructor(private firebaseSvc: FirebaseServiceProvider,
    private callNumber: CallNumber,
    private emailComposer: EmailComposer) {
  }

  ngOnInit(): void {
    this.listingDetails = this.listing;
    this.getIcon();
  }

  getIcon() {
    this.firebaseSvc.getNoLoad('/listing-image/' + this.listing.image, (icon) => {
      this.icon = icon.toString();
      this.listingDetails.image = this.icon;
      this.iconLoaded = true;
    });
  }

  view() {
    if (!this.iconLoaded) return;
    this.result.emit(this.listingDetails);
  }

  call() {
    var contact = this.listing.contact_infomation.find(f => f.type == 'call');
    this.callNumber.callNumber(contact.value, false)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  email() {
    var contact = this.listing.contact_infomation.find(f => f.type == 'mail');
    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
      }
    });

    let email = {
      to: contact.value,
      cc: 'justkidz@gmail.com',
      subject: 'Jus` Kidz: Inquiry',
      body: 'I would like to make an inquiry.',
      isHtml: true
    };
    this.emailComposer.open(email);
  }
}