import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  public cat1: any;
  public cat2: any;
  public cat3: any;
  public cat4: any;
  public title: string;

  public cats: Array<any>;

  constructor() { 
    this.cat1 = {
      "name": "lola",
      "img": "https://thumbs-prod.si-cdn.com/s-rtW1rEAQTIGcmUVNFSSPC4s3I=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/56/4a/564a542d-5c37-4be7-8892-98201ab13180/cat-2083492_1280.jpg"
    }

    this.cat2 = {
      "name": "Stella",
      "img": "https://spectator.imgix.net/content/uploads/2019/04/Notes-on.jpg?auto=compress,enhance,format&crop=faces,entropy,edges&fit=crop&w=820&h=550"
    }

    this.cat3 = {
      "name": "Penny",
      "img": "https://i.ytimg.com/vi/eNeRyBUCGV4/maxresdefault.jpg"
    }

    this.cat4 = {
      "name": "Ruby",
      "img": "https://dcist.com/wp-content/uploads/sites/3/2019/04/Gem2-1500x1346.jpg"
    }

    this.cats = [
      this.cat1,
      this.cat2,
      this.cat3,
      this.cat4
    ];

    this.title = "Who's the loveliest?";
  }

  ngOnInit() {
  }

}
