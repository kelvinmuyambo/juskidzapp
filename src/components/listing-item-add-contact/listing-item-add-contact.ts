import { Component } from '@angular/core';
import { ListingItemAddImagesComponent } from '../listing-item-add-images/listing-item-add-images';
import { NavController, NavParams } from 'ionic-angular';
import { ContactInformation } from '../../model/contact-information';
import { Listing } from '../../model/listing';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { Country } from '../../model/country';


@Component({
  selector: 'listing-item-add-contact',
  templateUrl: 'listing-item-add-contact.html'
})
export class ListingItemAddContactComponent {
  listing: Listing;
  phone: string;
  email: string;
  address: string;
  countries: Array<any>;
  selectedCountry: Country;
  town: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private firebaseService: FirebaseServiceProvider) {
    this.listing = navParams.get('listing');
    this.getCountries();
  }

  submit() {
    var contacts: Array<ContactInformation> = [];
    contacts.push(new ContactInformation('call', this.phone));
    contacts.push(new ContactInformation('mail', this.email));
    contacts.push(new ContactInformation('pin', this.selectedCountry.name + ', ' + this.town));
    contacts.push(new ContactInformation('compass', this.address));
    this.listing.contact_infomation = contacts;
    this.listing.town = this.town;
    this.navCtrl.push(ListingItemAddImagesComponent, { listing: this.listing });
  }

  getCountries() {
    this.firebaseService.get('/country/', (countries) =>
      this.countries = countries);
  }
}