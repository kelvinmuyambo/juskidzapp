import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { ListingImage } from '../../model/listing-image';
import { Event } from '../../model/event';
import { EventsPage } from '../../pages/events/events';


@Component({
  selector: 'event-item-add-images',
  templateUrl: 'event-item-add-images.html'
})
export class EventItemAddImagesComponent {
  event: Event;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public firebaseService: FirebaseServiceProvider, public alertCtrl: AlertController) {
    this.event = navParams.get('event');
  }

  fileChange($event, id) {
    if ($event == null) return;
    var input = $event.target;
    var reader = new FileReader();
    reader.onload = function () {
      var dataURL = reader.result;
      var image = document.getElementById('event-image' + id);
      if (image) image.setAttribute('src', dataURL.toString());
    };
    reader.readAsDataURL(input.files[0]);
  }

  getImage(id) {
    return document.getElementById('event-image' + id).getAttribute('src');
  }

  addImage(id) {
    var image = new ListingImage(this.getImage(id));
    return this.firebaseService.add('/event-image/', image).key;
  }

  addProfileImage() {
    return this.firebaseService.add('/event-image/', new ListingImage(this.event.image)).key;
  }

  submit() {
    this.event.image = this.addProfileImage();
    var images: Array<ListingImage> = [];
    images.push(new ListingImage(this.addImage(1)));
    images.push(new ListingImage(this.addImage(2)));
    images.push(new ListingImage(this.addImage(3)));
    this.event.images = images;
    this.event.date = new Date();
    this.firebaseService.add('event', this.event);
    this.alertCtrl.create({
      title: 'Event Added',
      message: 'Proceed to making a payment for your event to be active',
      buttons: ['OK']
    }).present();
    this.navCtrl.setRoot(EventsPage);
  }
}