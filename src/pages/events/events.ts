import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { EventItemDetailsComponent } from '../../components/event-item-details/event-item-details';
import { EventItemAddComponent } from '../../components/event-item-add/event-item-add';


@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  events: Array<any>;
  user: firebase.User;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,
    public firebaseService: FirebaseServiceProvider) {
    this.afAuth.authState.subscribe(user => this.user = user);
    this.getEvents();
  }

  openEvent(event) {
    this.navCtrl.push(EventItemDetailsComponent, { event: event });
    return;
  }

  getEvents() {
    this.firebaseService.get('event', (events: Array<any>) =>
      this.events = events.filter(f => f.isActive).sort(function (a, b) {
        var countA = a.likes ? a.likes.length : 0;
        var countB = b.likes ? b.likes.length : 0;
        return countB - countA;
      }));
  }

  addNew() {
    this.navCtrl.push(EventItemAddComponent);
    return;
  }
}