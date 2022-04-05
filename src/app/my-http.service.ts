import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MyHTTPService {

  constructor(private dogs:HttpClient,private cats:HttpClient,private users:HttpClient) { 

  }

  getUsers(){
    return this.users.get('https://jsonplaceholder.typicode.com/users')
  }
  getDogs(){
    return this.dogs.get('https://dog.ceo/api/breeds/image/random');
  }
  getCats(){
    return this.cats.get('cat-fact.herokuapp.com')
  }
}
