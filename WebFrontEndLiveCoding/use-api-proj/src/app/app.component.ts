import { Component } from '@angular/core';
import { TypicodeService } from './typicode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // properties
  whichId = 1
  photos = [] // this empty array will be populated from the end-point API
  // we need somewhere for the single selected photo to go
  onePhoto:any = {} // remember all these photos are objects
  // we need an instance of our service
  constructor(private typicode:TypicodeService){}

  // when the component first loads, it will run ngOnInit()
  ngOnInit(){ // 
    // make a call to our 'getAllPhotos' service
    this.typicode.getAllPhotos() // remember -this is an Observable
      .subscribe( this.handleAllPhotos() ) // we can subscribe to an Observable
  }
  handleAllPhotos(){
    // received is whatever data eventually comes back from the server
    return (received:any)=>{
      this.photos = received
    }
  }

  showOnePhoto(){
      // received is whatever data eventually comes back from the server
      return (received:any)=>{
        this.onePhoto = received
      }
  }

  getOne(){
    // we call the typicode.getOnePhoto method
    this.typicode.getOnePhoto(this.whichId)
    .subscribe( this.showOnePhoto() )
  }

}
