import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bird',
  templateUrl: './bird.component.html',
  styleUrls: ['./bird.component.css']
})
export class BirdComponent implements OnInit {

  public title: string;

  constructor() { 

    this.title = "Titulo para Bird";
  }

  ngOnInit() {
  }

  cambiarTitulo(){
    this.title = "Alguien ha dado click";
  }

}
