import { NgModule } from '@angular/core';
import { ListingItemComponent } from './listing-item/listing-item';
import { AccountAnonymousComponent } from './account-anonymous/account-anonymous';
import { AccountAnonymousLoginComponent } from './account-anonymous-login/account-anonymous-login';
import { AccountUserDetailsComponent } from './account-user-details/account-user-details';
import { ListingItemAddComponent } from './listing-item-add/listing-item-add';
import { ListingItemAddContactComponent } from './listing-item-add-contact/listing-item-add-contact';
import { ListingItemAddImagesComponent } from './listing-item-add-images/listing-item-add-images';
@NgModule({
	declarations: [ListingItemComponent,
    AccountAnonymousComponent,
    AccountAnonymousLoginComponent,
    AccountUserDetailsComponent,
    ListingItemAddComponent,
    ListingItemAddContactComponent,
    ListingItemAddImagesComponent],
	imports: [],
	exports: [ListingItemComponent,
    AccountAnonymousComponent,
    AccountAnonymousLoginComponent,
    AccountUserDetailsComponent,
    ListingItemAddComponent,
    ListingItemAddContactComponent,
    ListingItemAddImagesComponent]
})
export class ComponentsModule {}
