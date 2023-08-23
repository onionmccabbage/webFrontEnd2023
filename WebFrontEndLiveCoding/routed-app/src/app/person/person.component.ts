import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  // we need some properties
  name=''
  age=0
  // we need to handle the 'activated route'
  constructor( private route:ActivatedRoute ){
    route.params.subscribe(
      (params)=>{ 
        this.name = params['name']
        this.age  = params['age']
      }
    )
  }
}
