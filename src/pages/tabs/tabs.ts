import { Component } from "@angular/core";
import { FavoritesPage } from "../favorites/favorites";
import { QuotesPage } from "../quotes/quotes";

@Component({
	selector: 'page-tabs',
	template: `
		<ion-tabs>
			<ion-tab [root]="favoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
			<ion-tab [root]="quotesPage" tabTitle="Library" tabIcon="book"></ion-tab>
		</ion-tabs>
	`
})
export class TabsPage {
	favoritesPage = FavoritesPage;
	quotesPage = QuotesPage;
}