import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @Input() quotes;
  @Output() createQuoteEvent = new EventEmitter();

  newQuote = {body:"", author:"" , rating: 0};

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formData){
    console.log(formData);
    console.log(this.newQuote);
    this.createQuoteEvent.emit(this.newQuote);
    this.newQuote = {body: "",author: "", rating: 0};
  }

}
