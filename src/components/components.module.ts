import { NgModule } from '@angular/core';
import { ListingItemComponent } from './listing-item/listing-item';
import { AccountAnonymousComponent } from './account-anonymous/account-anonymous';
import { AccountAnonymousLoginComponent } from './account-anonymous-login/account-anonymous-login';
import { AccountUserDetailsComponent } from './account-user-details/account-user-details';
@NgModule({
	declarations: [ListingItemComponent,
    AccountAnonymousComponent,
    AccountAnonymousLoginComponent,
    AccountUserDetailsComponent],
	imports: [],
	exports: [ListingItemComponent,
    AccountAnonymousComponent,
    AccountAnonymousLoginComponent,
    AccountUserDetailsComponent]
})
export class ComponentsModule {}
