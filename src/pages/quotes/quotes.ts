import { Component } from '@angular/core';
import { NavParams, AlertController, Alert } from 'ionic-angular';
import { Quote } from "../../data/quote.interface";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage {
  quotesGroup: { category: string, quotes: Quote[], icon: string }

  constructor(private navParams: NavParams, private alertCtrl: AlertController) {}

  ionViewDidLoad() {
    this.quotesGroup = this.navParams.data;
  }

  onAddToFavorite(quote: Quote) {
    let alert: Alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            console.log('OK', quote);
          }
        },
        {
          text: 'No, I changed my mind',
          role: 'cancel',
          handler: () => {
            console.log('Alert cancelled');
          }
        }
      ]
    });

    alert.present();
  }
}
