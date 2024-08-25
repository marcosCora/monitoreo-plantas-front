import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../interfaces/user-login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  url : string = "http://localhost:8080/techapi/auth";

  //login
  postLogin(user : UserLogin) : Observable<string>{
    return this.http.post<string>(`${this.url}/login`, user);
  }


}
