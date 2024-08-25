import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../interfaces/user-login';
import { Observable } from 'rxjs';
import { User } from '../entity/user';

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

  //register
  posRegister(user : User): Observable<String>{

    return this.http.post<string>(`${this.url}/register`, user);
  }


}
