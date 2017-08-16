import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

import { Note } from './notes';

@Injectable()
export class NoteServiceService {
  constructor(private _http: Http) {}

  getAllNotes() {
    return this._http.get("/api/show").map(data => data.json()).toPromise();
  }
  create_note(newNote){
    return this._http.post('notes/add', newNote).map(data => data.json().toPromise())
  }
}
