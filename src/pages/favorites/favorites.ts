import { Component } from '@angular/core';
import { ModalController, Modal } from "ionic-angular";

import { Quote } from "../../data/quote.interface";

import { QuotesService } from "../../services/quotes.service";
import { QuotePage } from "../quote/quote";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(private quotesService: QuotesService, private modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal: Modal = this.modalCtrl.create(QuotePage, quote);

    modal.present();
  }
}
