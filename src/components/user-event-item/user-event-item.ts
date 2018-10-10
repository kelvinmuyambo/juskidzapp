import { Component, Input } from '@angular/core';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'user-event-item',
  templateUrl: 'user-event-item.html'
})
export class UserEventItemComponent {
  @Input() event: any;
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
}