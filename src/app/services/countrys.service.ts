import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Country } from '../entity/country';



interface ResponseCountry{
    "name": {
        "common": string;
    },
    "flags": {
        "png": string;
    }
}

@Injectable({
  providedIn: 'root'
})
export class CountrysService {

  constructor(private http : HttpClient) { }
  url = "https://restcountries.com/v3.1/all";

  getCountrys() : Observable<Country[]>{
    return this.http.get<ResponseCountry[]>(this.url).pipe(
      map((response : ResponseCountry[])=>{
        let countries : Country[] = [];
        response.forEach((data)=>{
          let country : Country = {
            name : data.name.common,
            urlFlag : data.flags.png
          };
          countries.push(country);
        });
        return countries;
      })
    )}

}
