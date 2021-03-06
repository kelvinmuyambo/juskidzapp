import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook'

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DirectoryPage } from '../pages/directory/directory';
import { EventsPage } from '../pages/events/events';
import { AccountPage } from '../pages/account/account';

import { AccountAnonymousComponent } from '../components/account-anonymous/account-anonymous';
import { AccountAnonymousLoginComponent } from '../components/account-anonymous-login/account-anonymous-login';
import { AccountUserDetailsComponent } from '../components/account-user-details/account-user-details';
import { EventItemComponent } from '../components/event-item/event-item';
import { EventItemDetailsComponent } from '../components/event-item-details/event-item-details';
import { ListingItemComponent } from '../components/listing-item/listing-item';
import { ListingItemDetailsComponent } from '../components/listing-item-details/listing-item-details';
import { ListingItemAddComponent } from '../components/listing-item-add/listing-item-add';
import { ListingItemAddContactComponent } from '../components/listing-item-add-contact/listing-item-add-contact';
import { ListingItemAddImagesComponent } from '../components/listing-item-add-images/listing-item-add-images';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseServiceProvider } from '../providers/firebase-service';
import { EventItemAddComponent } from '../components/event-item-add/event-item-add';
import { EventItemAddContactComponent } from '../components/event-item-add-contact/event-item-add-contact';
import { EventItemAddImagesComponent } from '../components/event-item-add-images/event-item-add-images';
import { EventItemAddDatesComponent } from '../components/event-item-add-dates/event-item-add-dates';
import { UserListingItemComponent } from '../components/user-listing-item/user-listing-item';
import { UserEventItemComponent } from '../components/user-event-item/user-event-item';
import { FilterItemTownComponent } from '../components/filter-item-town/filter-item-town';
import { FilterItemCategoryComponent } from '../components/filter-item-category/filter-item-category';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';
import { PaymentMakePaymentComponent } from '../components/payment-make-payment/payment-make-payment';
import { ProfileDetailsComponent } from '../components/profile-details/profile-details';
import { ProfileDetailsAddComponent } from '../components/profile-details-add/profile-details-add';

const firebaseConfig = {
  apiKey: "AIzaSyCdHuyelKbfYDaLKxnlxDL2aQWe0Uf9heE",
  authDomain: "jus-kidz-fdf75.firebaseapp.com",
  databaseURL: "https://jus-kidz-fdf75.firebaseio.com",
  projectId: "jus-kidz-fdf75",
  storageBucket: "",
  messagingSenderId: "47521912671"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DirectoryPage,
    AccountPage,
    EventsPage,
    TabsPage,
    FilterItemTownComponent,
    FilterItemCategoryComponent,
    EventItemComponent,
    EventItemAddComponent,
    EventItemAddContactComponent,
    EventItemAddImagesComponent,
    EventItemAddDatesComponent,
    EventItemDetailsComponent,
    ListingItemComponent,
    ListingItemAddComponent,
    ListingItemAddContactComponent,
    ListingItemAddImagesComponent,
    ListingItemDetailsComponent,
    AccountAnonymousComponent,
    AccountAnonymousLoginComponent,
    AccountUserDetailsComponent,
    UserListingItemComponent,
    UserEventItemComponent,
    PaymentMakePaymentComponent,
    ProfileDetailsComponent,
    ProfileDetailsAddComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DirectoryPage,
    AccountPage,
    EventsPage,
    TabsPage,
    FilterItemTownComponent,
    FilterItemCategoryComponent,
    AccountAnonymousLoginComponent,
    EventItemAddComponent,
    EventItemAddContactComponent,
    EventItemAddImagesComponent,
    EventItemAddDatesComponent,
    EventItemDetailsComponent,
    ListingItemAddComponent,
    ListingItemAddContactComponent,
    ListingItemAddImagesComponent,
    ListingItemDetailsComponent,
    PaymentMakePaymentComponent,
    ProfileDetailsComponent,
    ProfileDetailsAddComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseServiceProvider,
    GooglePlus,
    Facebook,
    CallNumber,
    EmailComposer,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }