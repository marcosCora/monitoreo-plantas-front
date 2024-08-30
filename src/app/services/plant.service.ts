import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Plant } from '../entity/plant';
import { PlantBoard } from '../entity/plant-board';
import { platformBrowser } from '@angular/platform-browser';
import { CountReadings } from '../interfaces/count-readings';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(private http : HttpClient) { }
  url : string = 'http://localhost:8080/techapi/plants'



  getPlantsBoard() : Observable<PlantBoard[]>{
    let headers = this.configHeaders();
    return this.http.get<PlantBoard[]>(`${this.url}/getalldto`, {headers});
  }

  getCountReadings() : Observable<CountReadings>{
    let headers = this.configHeaders();
    return this.http.get<CountReadings>(`${this.url}/count-readings`, {headers});
  }


  postPlant(p : PlantBoard) : Observable<any>{
    let headers = this.configHeaders();
    return this.http.post<any>(`${this.url}/creat-dto`, p, { headers });
  }

  putPlant(plant : PlantBoard) : Observable<string>{  
    let headers = this.configHeaders();  
    return this.http.put<string>(`${this.url}/update-plant`, plant, { headers }
    );
  }

  deletePlant(id : number) : Observable<string>{
    let headers = this.configHeaders();
    return this.http.delete<string>(`${this.url}/delete/${id}`, {headers});
  }

  configHeaders(): HttpHeaders{
    return new HttpHeaders({
      'Authorization' : `Bearer ${localStorage.getItem('jwt')}`
    });
  }



}
