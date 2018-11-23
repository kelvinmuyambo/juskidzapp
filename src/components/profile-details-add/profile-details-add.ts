import { Component } from '@angular/core';

/**
 * Generated class for the ProfileDetailsAddComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-details-add',
  templateUrl: 'profile-details-add.html'
})
export class ProfileDetailsAddComponent {

  text: string;

  constructor() {
    console.log('Hello ProfileDetailsAddComponent Component');
    this.text = 'Hello World';
  }

}
