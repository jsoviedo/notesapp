import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  public dog1: string;
  public dog2: string;
  public dog3: string;
  public dog4: string;
  public dog5: string;
  public dog6: string;
  public title: string;
  public dogs: Array<string>;

  constructor() { 

    this.dog1 ="https://thehappypuppysite.com/wp-content/uploads/2019/04/How-Long-Do-Pugs-Live-long.jpg";
    this.dog2 = "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13000937/Beagle-On-White-07.jpg";
    this.dog3 = "https://estaticos.muymascotas.es/media/cache/760x570_thumb/uploads/images/article/594779795bafe8f2ca3c986a/dalmata-perro-playa_0.jpg";
    this.dog4 = "https://2.bp.blogspot.com/-pbdNn_1TOyI/V14_6BIJXGI/AAAAAAAAF2o/ZLRrUxl6G4AgMnWsattnhTdaoHGPwq9FwCKgB/s1600/Alaskan_Malamute_Lead_Shot.jpg";
    this.dog5 = "https://media.daysoftheyear.com/20171223105712/golden-retriever-day.jpg"
    this.dog6 = "https://i.pinimg.com/originals/be/ed/c6/beedc6d9083c8267b743c112ad68e3a7.jpg";

    this.dogs = [
      this.dog1,
      this.dog2,
      this.dog3,
      this.dog4,
      this.dog5,
      this.dog6
    ];
    this.title = "Which is your favorite?";
  }

  ngOnInit() {
  }

}
