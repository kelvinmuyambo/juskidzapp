import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { Lists } from '../../helpers/lists';
import { FilterItemCategoryComponent } from '../filter-item-category/filter-item-category';

@Component({
  selector: 'filter-item-town',
  templateUrl: 'filter-item-town.html'
})
export class FilterItemTownComponent {
  towns: Array<any> = [];
  type: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var items = this.navParams.get('items');
    this.type = this.navParams.get('type');
    this.towns = Lists.groupBy(items, 'town');
  }

  select(item) {
    this.navCtrl.push(FilterItemCategoryComponent, { filter: item, type: this.type });
  }
}