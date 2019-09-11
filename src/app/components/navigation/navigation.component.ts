import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public cats: string;
  public dogs: string;
  public birds: string;
  public notes: string;


  constructor() { 
    this.cats = "Cats";
    this.dogs = "Dogs";
    this.birds = "Birds";
    this.notes = "Notes"
  }

  ngOnInit() {
  }

}
