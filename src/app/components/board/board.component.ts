import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/entity/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit{

  constructor(private servicePlant : PlantService){}

  createPlant : boolean = false;
  plants : Plant[] = [];

  ngOnInit(): void {
    this.servicePlant.getPlants().subscribe((response)=>{
      this.plants = response;
      console.log(response);
      
    }, 
    (error) =>{
      console.log(error);
    }
    )
  }

  createPlantState(state : boolean){
    this.createPlant = state;
  }

}
