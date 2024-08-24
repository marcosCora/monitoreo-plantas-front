import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Plant } from '../entity/plant';
import { PlantBoard } from '../entity/plant-board';
import { platformBrowser } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(private http : HttpClient) { }
  url : string = 'http://localhost:8080/techapi/plants'

  getPlantsBoard() : Observable<PlantBoard[]>{
    return this.http.get<PlantBoard[]>(`${this.url}/getalldto`);
  }

  postPlant(p : PlantBoard) : Observable<PlantBoard>{
    return this.http.post<PlantBoard>(`${this.url}/creat`, p);
  }

  putPlant(plant : PlantBoard) : Observable<PlantBoard>{    
    return this.http.put<PlantBoard>(`${this.url}/update-plant`, plant);
  }


}
