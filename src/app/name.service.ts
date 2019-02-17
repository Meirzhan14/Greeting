import { Injectable } from '@angular/core';
import {Greeting} from './Greeting';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class NameService {

  uri = 'http://localhost:8080/api/greeting';
  constructor(private http: HttpClient) { }

  addName(name){
    const obj: Greeting = {
      name: name
    };
    return this.http.post<Greeting>(`${this.uri}`, obj, httpOptions);
  }

  getName() {
    return this.http.get<Greeting>(`${this.uri}`);
  }

}
