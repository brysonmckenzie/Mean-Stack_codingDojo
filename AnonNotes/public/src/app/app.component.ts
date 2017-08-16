import { Component } from '@angular/core';
import { Note } from "./note";
import { NoteServiceService } from './note-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  note = new Note()

  constructor(private_noteService: NoteServiceService) { }

  createNote(){
    .then ( data=> {

    })

  }
}


this._httpService.createNote(this.newnote)
.then( data => { 
                console.log('success', data);
                this._httpService.getNotes()
                .then( data => {
                  console.log('Showing data...', data);
                  this.notes = [];
                  for (var i=0; i<data.length; i++) {
                    this.notes.push(data[i]);
                  }
                  console.log('added to array', this.notes);
                })
                .catch( err => {
                  console.log('Error found!!', err);
                })
               })
.catch( err => { 
                console.log('user not found', err);  
               })
}
}
