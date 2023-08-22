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
  catName='Mildred'
  // here is a portfolio array
  portfolio = [
    {'ticker':'AAPL', 'qty':10, 'price':100},
    {'ticker':'AMAZN', 'qty':20, 'price':200},
    {'ticker':'C', 'qty':30, 'price':300},
    {'ticker':'FB', 'qty':40, 'price':400},
    {'ticker':'TSLA', 'qty':50, 'price':500}
  ]


  // methods of this class
  handleButton(){
    // in Angular, 'this' refers the the curent class
    this.imgUrl = 'https://placekitten.com/128/128'
  }
}
