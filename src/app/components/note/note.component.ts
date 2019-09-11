import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  public note: Note;
  public notes: Array<any>;
  public keys: Array<string>;


  constructor() {
    this.note = new Note('', '');
    this.notes = [];
  }

  ngOnInit() { 
    
    console.log(localStorage);
    this.keys = Object.keys(localStorage);
    console.log(this.keys);
    for(let i = 0; i < localStorage.length ; i++){
      this.note =  JSON.parse(localStorage.getItem(this.keys[i]));
      this.notes.push(this.note);
      }
    
  }


  onAddNote(form){
    
    if( form.title.value !== '' && form.body.value !== '') {

      this.note = {
        title: form.title.value,
        body: form.body.value
      }
      localStorage.setItem(form.title.value, JSON.stringify(this.note));
      this.notes.push(this.note);
      form.reset();
    }
  }

  onCopyNote(form){
    form.body.select();
    document.execCommand("copy");
  }

  onDeleteNote(form){
    form.reset();
  }
}
