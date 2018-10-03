import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventItemAddContactComponent } from '../event-item-add-contact/event-item-add-contact';
import { Event } from '../../model/event';

@Component({
  selector: 'event-item-add-dates',
  templateUrl: 'event-item-add-dates.html'
})
export class EventItemAddDatesComponent {
  event: Event;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.event = navParams.get('event');
    this.event.startDate = this.setDate(new Date());
    this.event.endDate = this.setDate(new Date());
  }

  submit() {
    this.navCtrl.push(EventItemAddContactComponent, { event: this.event });
  }

  private setDate(date: Date): string {
    return date.getFullYear() + '-' + this.make2Digits(date.getMonth() + 1) + '-' + this.make2Digits(date.getDay());
  }

  private make2Digits(digit: number): string {
    if (digit < 9) return '0' + digit;
    return digit + ''
  }
}