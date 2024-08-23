import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plant } from '../entity/plant';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(private http : HttpClient) { }
  URL : string = 'http://localhost:8080/techapi/plants'

  getPlants() : Observable<Plant[]>{
    return this.http.get<Plant[]>(`${this.URL}/getall`);
  }



}
