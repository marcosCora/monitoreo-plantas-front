import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/entity/plant';
import { PlantBoard } from 'src/app/entity/plant-board';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit{

  constructor(private servicePlant : PlantService){}

  createPlant : boolean = false;
  optionPlant : boolean = false;
  plantBoard : PlantBoard[] = [];

  ngOnInit(): void {
    this.servicePlant.getPlantsBoard().subscribe((response)=>{
      this.plantBoard = response;
      console.log(this.plantBoard);
    }, 
    (error) =>{
      console.log(error);
    }
    )
  }

  createPlantState(state : boolean){
    this.createPlant = state;
  }

  optionsPlant(){
    if(this.optionPlant == false){
      this.optionPlant = true;
    }else{
      this.optionPlant = false;
    }
  }

}
