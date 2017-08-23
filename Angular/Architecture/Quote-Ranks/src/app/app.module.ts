import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteListComponent } from './quote-list/quote-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteListComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
