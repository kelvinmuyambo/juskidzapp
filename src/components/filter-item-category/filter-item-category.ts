import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Lists } from '../../helpers/lists';
import { DirectoryPage } from '../../pages/directory/directory';


@Component({
  selector: 'filter-item-category',
  templateUrl: 'filter-item-category.html'
})
export class FilterItemCategoryComponent {
  categories: Array<any> = [];
  type: string;
  town: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var item = this.navParams.get('filter');
    this.type = this.navParams.get('type');
    this.town = item.key;
    this.categories = Lists.groupBy(item.data, 'category');
  }

  select(item) {
    item.key = this.town + ' > ' + item.key;
    this.navCtrl.setRoot(DirectoryPage, { filter: item });
  }
}