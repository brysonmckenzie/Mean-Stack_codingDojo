import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { HttpModule } from '@angular/http';

import { NoteServiceService } from './note-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    NoteServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
