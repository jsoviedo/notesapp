import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { Note } from 'src/app/models/note';
import { SnippetService } from 'src/app/services/snippets.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  providers: [SnippetService]
})
export class NoteComponent implements OnInit {

  public note: Note;
  public show: boolean;
  public notes: Array<any>;
  public keys: Array<string>;


  constructor(
    private snippetService: SnippetService
  ) {
    this.note = new Note('', '', true);
    this.notes = [];
    this.show = true;
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
    this.snippetService.createSnippet(form.title.value, form.content.value)
    .subscribe(response => {
      console.log(response);
    },
    error => {
      console.log(error);
    });
    form.reset();
    
    /*if( form.title.value !== '' && form.body.value !== '') {

      this.note = {
        title: form.title.value,
        body: form.body.value,
        visible: true
      }
      localStorage.setItem(form.title.value, JSON.stringify(this.note));
      this.notes.push(this.note);
      form.reset();
    }*/
  }

  onCopyNote(form){
    form.body.select();
    document.execCommand("copy");
  }

  onDeleteNote(form){
    form.reset();
  }

  onCopyNotes(text){
    text.disabled = false;
    text.select();
    document.execCommand("copy");
    text.disabled = true;
  }

  onDelete(note){
    note.visible = false;
    localStorage.removeItem(note.title);
  }
}
