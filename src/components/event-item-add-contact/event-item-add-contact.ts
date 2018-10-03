import { Component } from '@angular/core';
import { Event } from '../../model/event';
import { Country } from '../../model/country';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { ContactInformation } from '../../model/contact-information';
import { EventItemAddImagesComponent } from '../event-item-add-images/event-item-add-images';


@Component({
  selector: 'event-item-add-contact',
  templateUrl: 'event-item-add-contact.html'
})
export class EventItemAddContactComponent {
  event: Event;
  phone: string;
  email: string;
  address: string;
  countries: Array<any>;
  selectedCountry: Country;
  town: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private firebaseService: FirebaseServiceProvider) {
    this.event = navParams.get('event');
    this.getCountries();
  }

  submit() {
    var contacts: Array<ContactInformation> = [];
    contacts.push(new ContactInformation('call', this.phone));
    contacts.push(new ContactInformation('mail', this.email));
    contacts.push(new ContactInformation('pin', this.selectedCountry.name + ', ' + this.town));
    contacts.push(new ContactInformation('compass', this.address));
    this.event.contact_infomation = contacts;
    this.event.town = this.town;
    this.navCtrl.push(EventItemAddImagesComponent, { event: this.event });
  }

  getCountries() {
    this.firebaseService.get('/country/', (countries) =>
      this.countries = countries);
  }
}