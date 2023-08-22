import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // these are  the properties of this class
  title = 'wow thats clever';
  wealth = 999
  imgUrl = 'https://placekitten.com/64/64'
  a = 'a kitten'
  t = 'picture of a kitten'
  // methods of this class
  handleButton(){
    // in Angular, 'this' refers the the curent class
    this.imgUrl = 'https://placekitten.com/128/128'
  }
}
