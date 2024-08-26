import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CountReadings } from 'src/app/interfaces/count-readings';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-global-readings',
  templateUrl: './global-readings.component.html',
  styleUrls: ['./global-readings.component.css']
})
export class GlobalReadingsComponent implements OnInit{

  constructor(private servicePlant : PlantService){}
  countReading : CountReadings = {
    readingsTotals : 0,
    alertsOk : 0,
    alertsRed : 0,
    sensorsDisiabled : 0,
    alertsMedias : 0
  };

  ngOnInit(): void {
    this.servicePlant.getCountReadings().subscribe((response)=>{
      this.countReading = response;
    }, (error)=>{
      console.log("Error", error);
    })
  }
}
