import { Component } from '@angular/core';
import { NavParams, AlertController, NavController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { CallNumber } from '@ionic-native/call-number';
import { Payment } from '../../model/payment';

@Component({
  selector: 'payment-make-payment',
  templateUrl: 'payment-make-payment.html'
})
export class PaymentMakePaymentComponent {
  paymentType: number;
  itemDetails: any;
  hasPaid: boolean;
  message: string;
  constructor(public navCtrl: NavController, params: NavParams, private firebaseService: FirebaseServiceProvider,
    private callNumber: CallNumber, public alertCtrl: AlertController) {
    this.paymentType = params.data.type;
    this.itemDetails = params.data.details;
    this.hasPaid = this.itemDetails.paymentStatus == 1;
  }

  makePayment(ecocash) {
    this.callNumber.callNumber(ecocash, false)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  alreadyPaid() {
    this.hasPaid = true;
  }

  confirmPayment() {
    var payment: Payment = new Payment();
    payment.amount = 10;
    payment.content_type = this.paymentType;
    payment.content_id = this.itemDetails.key;
    payment.confirmation = this.message;

    this.firebaseService.add('payment', payment);
    var itemUrl = this.paymentType == 1 ? '/listing/' : '/event/';
    this.firebaseService.afd.object(itemUrl + this.itemDetails.key)
      .update({ paymentStatus: 1 }).then(result => {
        this.alertCtrl.create({
          title: 'Payment Confirmation Sent',
          message: 'Your payment will be confirmed in 24 working hours.',
          buttons: ['OK']
        }).present();
      });
    this.navCtrl.pop();
  }
}