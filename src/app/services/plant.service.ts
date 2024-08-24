import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Plant } from '../entity/plant';
import { PlantBoard } from '../entity/plant-board';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(private http : HttpClient) { }
  url : string = 'http://localhost:8080/techapi/plants'

  getPlantsBoard() : Observable<PlantBoard[]>{
    return this.http.get<PlantBoard[]>(`${this.url}/getall`);
  }

  postPlant(p : Plant) : Observable<Plant>{
    return this.http.post<Plant>(`${this.url}/creat`, p);
  }
}
