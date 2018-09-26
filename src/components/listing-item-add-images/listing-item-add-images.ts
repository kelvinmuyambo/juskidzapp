import { Component } from '@angular/core';
import { Listing } from '../../model/listing';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { ListingImage } from '../../model/listing-image';
import { DirectoryPage } from '../../pages/directory/directory';

@Component({
  selector: 'listing-item-add-images',
  templateUrl: 'listing-item-add-images.html'
})
export class ListingItemAddImagesComponent {
  listing: Listing;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public firebaseService: FirebaseServiceProvider, public alertCtrl: AlertController) {
    this.listing = navParams.get('listing');
  }

  fileChange($event, id) {
    if ($event == null) return;
    var input = $event.target;
    var reader = new FileReader();
    reader.onload = function () {
      var dataURL = reader.result;
      var image = document.getElementById('listing-image' + id);
      if (image) image.setAttribute('src', dataURL.toString());
    };
    reader.readAsDataURL(input.files[0]);
  }

  submit() {
    this.listing.image = this.addProfileImage();
    var images: Array<ListingImage> = [];
    images.push(new ListingImage(this.addImage(1)));
    images.push(new ListingImage(this.addImage(2)));
    images.push(new ListingImage(this.addImage(3)));
    this.listing.images = images;
    this.listing.date = new Date();
    this.listing.isActive = false;
    this.firebaseService.add('listing', this.listing);
    this.alertCtrl.create({
      title: 'Listing Added',
      message: 'Proceed to making a payment for your listing to be active',
      buttons: ['OK']
    }).present();
    this.navCtrl.setRoot(DirectoryPage);
  }

  getImage(id) {
    return document.getElementById('listing-image' + id).getAttribute('src');
  }

  addImage(id) {
    var image = new ListingImage(this.getImage(id));
    return this.firebaseService.add('/listing-image/', image).key;
  }

  addProfileImage() {
    return this.firebaseService.add('/listing-image/', new ListingImage(this.listing.image)).key;
  }
}