import { NgModule } from '@angular/core';
import { ListingItemComponent } from './listing-item/listing-item';
import { AccountAnonymousComponent } from './account-anonymous/account-anonymous';
import { AccountAnonymousLoginComponent } from './account-anonymous-login/account-anonymous-login';
import { AccountUserDetailsComponent } from './account-user-details/account-user-details';
import { ListingItemAddComponent } from './listing-item-add/listing-item-add';
import { ListingItemAddContactComponent } from './listing-item-add-contact/listing-item-add-contact';
import { ListingItemAddImagesComponent } from './listing-item-add-images/listing-item-add-images';
import { ListingItemDetailsComponent } from './listing-item-details/listing-item-details';
import { EventItemComponent } from './event-item/event-item';
import { EventItemDetailsComponent } from './event-item-details/event-item-details';
import { EventItemAddComponent } from './event-item-add/event-item-add';
import { EventItemAddContactComponent } from './event-item-add-contact/event-item-add-contact';
import { EventItemAddImagesComponent } from './event-item-add-images/event-item-add-images';
import { EventItemAddDatesComponent } from './event-item-add-dates/event-item-add-dates';
import { UserListingItemComponent } from './user-listing-item/user-listing-item';
import { UserEventItemComponent } from './user-event-item/user-event-item';
import { FilterItemTownComponent } from './filter-item-town/filter-item-town';
import { FilterItemCategoryComponent } from './filter-item-category/filter-item-category';
@NgModule({
	declarations: [ListingItemComponent,
    AccountAnonymousComponent,
    AccountAnonymousLoginComponent,
    AccountUserDetailsComponent,
    ListingItemAddComponent,
    ListingItemAddContactComponent,
    ListingItemAddImagesComponent,
    ListingItemDetailsComponent,
    EventItemComponent,
    EventItemDetailsComponent,
    EventItemAddComponent,
    EventItemAddContactComponent,
    EventItemAddImagesComponent,
    EventItemAddDatesComponent,
    UserListingItemComponent,
    UserEventItemComponent,
    FilterItemTownComponent,
    FilterItemTownComponent,
    FilterItemCategoryComponent],
	imports: [],
	exports: [ListingItemComponent,
    AccountAnonymousComponent,
    AccountAnonymousLoginComponent,
    AccountUserDetailsComponent,
    ListingItemAddComponent,
    ListingItemAddContactComponent,
    ListingItemAddImagesComponent,
    ListingItemDetailsComponent,
    EventItemComponent,
    EventItemDetailsComponent,
    EventItemAddComponent,
    EventItemAddContactComponent,
    EventItemAddImagesComponent,
    EventItemAddDatesComponent,
    UserListingItemComponent,
    UserEventItemComponent,
    FilterItemTownComponent,
    FilterItemTownComponent,
    FilterItemCategoryComponent]
})
export class ComponentsModule {}
