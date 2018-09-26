import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { DirectoryPage } from '../directory/directory';
import { AccountPage } from '../account/account';
import { EventsPage } from '../events/events';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DirectoryPage;
  tab3Root = EventsPage;
  tab4Root = AccountPage;

  constructor() {

  }
}
