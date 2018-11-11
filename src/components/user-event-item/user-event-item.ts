import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { AlertController } from 'ionic-angular';
import { Event } from '../../model/event';

@Component({
  selector: 'user-event-item',
  templateUrl: 'user-event-item.html'
})
export class UserEventItemComponent {
  @Input() event: Event;
  @Output() makePayment = new EventEmitter<any>();
  icon: string;
  constructor(private firebaseService: FirebaseServiceProvider, public alertCtrl: AlertController) {
  }

  ngOnInit(): void {
    this.getIcon();
  }

  getIcon(): any {
    this.firebaseService.getIcon('/event-image/' + this.event.image, (icon) => this.icon = icon);
  }

  toggle() {
    this.firebaseService.afd.object('/event/' + this.event.key)
      .update({ isActive: !this.event.isActive }).then(result => {
        const action: string = !this.event.isActive ? ' activated' : ' de-activated';
        this.alertCtrl.create({
          subTitle: this.event.title + action,
          buttons: ['OK']
        }).present()
      });
  }

  pay() {
    this.event.image = this.icon;
    this.makePayment.emit({
      type: 2,
      details: this.event
    })
  }
}