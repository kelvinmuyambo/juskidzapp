import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'event-item-details',
  templateUrl: 'event-item-details.html'
})
export class EventItemDetailsComponent {
  event: any;
  constructor(params: NavParams) {
    this.event = params.data.event;
  }
}