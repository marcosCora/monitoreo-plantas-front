import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
    return this.http.get<PlantBoard[]>(`${this.url}/getalldto`);
  }

  getCountReadings() : Observable<CountReadings>{
    return this.http.get<CountReadings>(`${this.url}/count-readings`);
  }


  postPlant(p : PlantBoard) : Observable<PlantBoard>{
    return this.http.post<PlantBoard>(`${this.url}/creat-dto`, p);
  }

  putPlant(plant : PlantBoard) : Observable<PlantBoard>{    
    return this.http.put<PlantBoard>(`${this.url}/update-plant`, plant);
  }

  deletePlant(id : number) : Observable<string>{
    return this.http.delete<string>(`${this.url}/delete/${id}`);
    }


}
