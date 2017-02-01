import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Quote } from "../../data/quote.interface";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage {
  quotesGroup: { category: string, quotes: Quote[], icon: string }

  constructor(private navParams: NavParams) {}

  ionViewDidLoad() {
    this.quotesGroup = this.navParams.data;
  }

  onAddToFavorite(quote: Quote) {

  }
}
