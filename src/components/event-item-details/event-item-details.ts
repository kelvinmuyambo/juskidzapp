import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { ListingImage } from '../../model/listing-image';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'event-item-details',
  templateUrl: 'event-item-details.html'
})
export class EventItemDetailsComponent {
  user: firebase.User;
  event: any;
  images: Array<any> = [];
  constructor(private aufAuth: AngularFireAuth, params: NavParams, private firebaseService: FirebaseServiceProvider) {
    this.event = params.data.event;
    this.aufAuth.authState.subscribe(r => this.user = r);
    this.loadImages();
  }

  loadImages() {
    this.event.images.forEach(image => {
      this.firebaseService.getNoLoad('/event-image/' + image.data, (r) =>
        this.images.push(new ListingImage(r.toString())))
    })
  }

  getRating(type: string): number {
    return this.event ? this.event[type] ? this.event[type].length : 0 : 0;
  }

  hasRating(): boolean {
    if (this.user == null || this.event == null) return true;
    return this.hasRatingByType('likes') || this.hasRatingByType('dislikes');
  }

  hasRatingByType(type: string): boolean {
    return this.event[type] ?
      this.event[type].find(f => f == this.user.uid) :
      false;
  }

  rate(type: string): void {
    this.firebaseService.afd.object('/event/' + this.event.key)
      .update(this.getRate(type)).then(result => {
      });
  }

  getRate(type: string): any {
    if (this.event[type]) this.event[type].push(this.user.uid);
    else this.event[type] = [this.user.uid];
    var rating = this.event[type];
    if (type == 'likes') return { likes: rating }
    return { dislikes: rating };
  }

  comment: string = '';
  submit() {
    this.firebaseService.afd.object('/event/' + this.event.key)
      .update(this.getComment()).then(result => {
      });
  }

  getComment() {
    var comment = {
      user: {
        uid: this.user.uid,
        name: this.user.displayName
      },
      comment: this.comment,
      date: new Date()
    };
    this.comment = '';
    if (this.event.comments) this.event.comments.push(comment);
    else this.event.comments = [comment];
    return { comments: this.event.comments };
  }

  rsvp() {
    this.firebaseService.afd.object('/event/' + this.event.key)
      .update(this.getRsvp()).then(result => {
      });
  }

  getRsvps(){
    return this.event.rsvp ? this.event.rsvp.length : 0;
  }

  getRsvp(): any {
    var rsvp = {
      user: {
        uid: this.user.uid,
        name: this.user.displayName
      },
      date: new Date()
    };
    if (this.event.rsvp) this.event.rsvp.push(rsvp);
    else this.event.rsvp = [rsvp];
    return { rsvp: this.event.rsvp };
  }

  hasRsvp(): boolean {
    return this.event ? this.event.rsvp ? this.event.rsvp.find(e => e.user.uid == this.user.uid) : false : false;
  }
}