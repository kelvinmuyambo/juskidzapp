import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DirectoryPage } from '../pages/directory/directory';
import { EventsPage } from '../pages/events/events';
import { AccountPage } from '../pages/account/account';

import { ListingItemComponent } from '../components/listing-item/listing-item';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseServiceProvider } from '../providers/firebase-service';

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
    ListingItemComponent
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
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
