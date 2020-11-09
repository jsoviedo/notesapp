import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';
import { SnippetService } from 'src/app/services/snippets.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
  providers: [ SnippetService ]
})
export class NotesListComponent implements OnInit {

  public notes: Array<string>;
  public note: Note;

  constructor(
    private _service: SnippetService 
  ) { }

  ngOnInit() {
  }

  onOptionSelected(option) {
    this._service.getSnippets().subscribe(
      response => {
        let res: any = response;
        this.notes = res.snippets;
        console.log(this.notes);
      },
      error  => {
        console.log(error);
      }
    );
  }

  onCreateSnippet() {
    
  }
}
