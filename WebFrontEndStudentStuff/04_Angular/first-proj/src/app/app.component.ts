import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // properties of this class
  title = 'first-proj';
  i = 'https://placekitten.com/120/64'
  a = 'random kitten'
  catName = 'Mildred'
  stocks = ['AAPL', 'AMAZN', 'C', 'FB', 'TSLA']
  portfolio = [
    {'ticker':'AAPL', 'qty':10, 'price':100},
    {'ticker':'AMAZN', 'qty':20, 'price':200},
    {'ticker':'C', 'qty':30, 'price':300},
    {'ticker':'FB', 'qty':40, 'price':400},
    {'ticker':'TSLA', 'qty':50, 'price':500}
  ]
  receivedItem = {}
  // methods of this class
  handleSomething(){console.log('event handled')}
  handleItem(e:any){
    // here we receive the custom event from a child component
    this.receivedItem = e
  }
}
