import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { Event } from '../../model/event';

@Component({
  selector: 'event-item',
  templateUrl: 'event-item.html'
})
export class EventItemComponent {
  @Input() event: Event;
  @Output() result = new EventEmitter<any>();
  icon: string;

  constructor(private firebaseSvc: FirebaseServiceProvider) {
  }

  ngOnInit(): void {
    this.getIcon();
  }

  getIcon() {
    this.firebaseSvc.getNoLoad('/event-image/' + this.event.image, (icon) => {
      this.icon = icon.toString();
      this.event.image = this.icon;
    });
  }

  view() {
    this.result.emit(this.event);
  }
}
