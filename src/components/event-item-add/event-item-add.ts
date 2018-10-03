import { Component } from '@angular/core';
import { Event } from '../../model/event';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { EventItemAddDatesComponent } from '../event-item-add-dates/event-item-add-dates';


@Component({
  selector: 'event-item-add',
  templateUrl: 'event-item-add.html'
})
export class EventItemAddComponent {
  event: Event = new Event();
  categories: Array<any>;
  constructor(private aufAuth: AngularFireAuth, public navCtrl: NavController,
    private firebaseSvc: FirebaseServiceProvider) {
    this.loadUser();
    this.loadCategories();
  }

  loadUser() {
    this.aufAuth.authState.subscribe(r => {
      this.event.uid = r.uid;
    });
  }

  loadCategories() {
    this.firebaseSvc.get('/listing-category/', (categories) =>
      this.categories = categories);
  }

  submit() {
    var image = document.getElementById('event-image');
    if (!image) return;
    this.event.image = image.getAttribute('src');
    this.navCtrl.push(EventItemAddDatesComponent, { event: this.event });
  }

  fileChange($event) {
    if ($event == null) return;
    var input = $event.target;
    var reader = new FileReader();
    reader.onload = function () {
      var dataURL = reader.result;
      var image = document.getElementById('event-image');
      if (image) image.setAttribute('src', dataURL.toString());
    };
    reader.readAsDataURL(input.files[0]);
  }
}