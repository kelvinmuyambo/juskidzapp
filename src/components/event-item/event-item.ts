import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseServiceProvider } from '../../providers/firebase-service';

@Component({
  selector: 'event-item',
  templateUrl: 'event-item.html'
})
export class EventItemComponent {
  @Input() event: any;
  @Output() result = new EventEmitter<any>();
  icon: string;

  constructor(private firebaseSvc: FirebaseServiceProvider) {
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
