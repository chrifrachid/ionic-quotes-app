import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Quote } from "../../data/quote.interface";
import { QuotesService } from "../../services/quotes.service";

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage implements OnInit {
  quote: Quote;

  constructor(private navParams: NavParams,
              private viewCtrl: ViewController,
              private quotesService: QuotesService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
  }

  ngOnInit() {
    this.quote = (<Quote>this.navParams.data);
  }

  removeQuote(quote: Quote) {
    this.quotesService.removeQuoteFromFavorite(quote);
  }

  onCloseModal(remove: boolean = false) {
    this.viewCtrl.dismiss(remove);
  }
}
