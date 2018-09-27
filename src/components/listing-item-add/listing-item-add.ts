import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from 'ionic-angular';
import { ListingItemAddContactComponent } from '../listing-item-add-contact/listing-item-add-contact';
import { Listing } from '../../model/listing';
import { FirebaseServiceProvider } from '../../providers/firebase-service';


@Component({
  selector: 'listing-item-add',
  templateUrl: 'listing-item-add.html'
})
export class ListingItemAddComponent {
  listing: Listing = new Listing();
  categories: Array<any>;
  constructor(private aufAuth: AngularFireAuth, public navCtrl: NavController,
    private firebaseSvc: FirebaseServiceProvider) {
    this.loadUser();
    this.loadCategories();
  }

  loadUser() {
    this.aufAuth.authState.subscribe(r => {
      this.listing.uid = r.uid;
    });
  }

  loadCategories() {
    this.firebaseSvc.get('/listing-category/', (categories) =>
      this.categories = categories);
  }

  submit() {
    var image = document.getElementById('listing-image');
    if (!image) return;
    this.listing.image = image.getAttribute('src');
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