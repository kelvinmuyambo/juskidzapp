import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from 'ionic-angular';
import { ListingItemAddContactComponent } from '../listing-item-add-contact/listing-item-add-contact';
import { Listing } from '../../model/listing';


@Component({
  selector: 'listing-item-add',
  templateUrl: 'listing-item-add.html'
})
export class ListingItemAddComponent {
  listing: Listing = new Listing();
  constructor(private aufAuth: AngularFireAuth,public navCtrl: NavController) {
    this.loadUser();
  }

  loadUser(){
    this.aufAuth.authState.subscribe(r =>{
      this.listing.uid = r.uid;
    });
  }

  submit() {
    var image = document.getElementById('listing-image');
    if (!image) return;
    this.listing.image = image.getAttribute('src');
    console.log(this.listing.image);
    this.navCtrl.push(ListingItemAddContactComponent, { listing: this.listing });
  }

  fileChange($event) {
    if ($event == null) return;
    var input = $event.target;
    var reader = new FileReader();
    reader.onload = function () {
      var dataURL = reader.result;
      var image = document.getElementById('listing-image');
      if (image) image.setAttribute('src', dataURL.toString());
    };
    reader.readAsDataURL(input.files[0]);
  }
}