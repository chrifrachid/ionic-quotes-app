import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Quote } from "../../data/quote.interface";

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage implements OnInit {
  quote: Quote;

  constructor(private navParams: NavParams, private viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
  }

  ngOnInit() {
    this.quote = (<Quote>this.navParams.data);
  }

  onCloseModal() {
    this.viewCtrl.dismiss();
  }
}
