import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../interfaces/user-login';
import { Observable } from 'rxjs';
import { User } from '../entity/user';
import { ResponseToken } from '../interfaces/response-token';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  url : string = "http://localhost:8080/techapi/auth";

  //login
  postLogin(user : UserLogin) : Observable<ResponseToken>{
    return this.http.post<ResponseToken>(`${this.url}/login`, user);
  }

  //register
  posRegister(user : User): Observable<String>{

    return this.http.post<string>(`${this.url}/register`, user);
  }

  //getName
  getName(user : UserLogin) : Observable<String>{
    let headers = this.configHeaders();
   
    return this.http.post<string>(`${this.url}/get-name`, user, {headers});
  }

  configHeaders(): HttpHeaders{
    return new HttpHeaders({
      'Authorization' : `Bearer ${localStorage.getItem('jwt')}`
    });
  }


}
