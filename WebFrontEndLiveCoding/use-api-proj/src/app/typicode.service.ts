import { Injectable } from '@angular/core';
// we need to import the HttpClient
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypicodeService {
  // properties
  apiUrl = 'https://jsonplaceholder.typicode.com/photos'
  
  
  // we need access to the HttpClient (comes from the HttpClientModule)
  constructor(private http:HttpClient) { }

  // methods of this service
  // get all the photos
  getAllPhotos(){
    // every Angular service must return an Observable (Typescript insists)
    try {
      return this.http.get(this.apiUrl)
    } // boilerplate - always do this
    catch (err) {
      return new Observable()
    }
  }

}
