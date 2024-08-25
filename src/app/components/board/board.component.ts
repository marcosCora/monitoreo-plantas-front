import { Component, OnInit, Output } from '@angular/core';
import { map } from 'rxjs';
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
  modifyPlant : boolean = false;
  plantBoard : PlantBoard[] = [];
  plantSelected : PlantBoard = new PlantBoard();

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

  deletePlant(){
    this.servicePlant.deletePlant(this.plantSelected.idPlant).subscribe((response)=>{
      console.log("Planta eliminada", this.plantBoard);
      
    }, 
    (error) =>{
      console.log(error);
    }
    );
  }

  createPlantState(state : boolean){
    this.createPlant = state;
  }

  optionsPlant(plant : PlantBoard){

    this.mapPlant(plant);
    if(this.optionPlant == false){
      this.optionPlant = true;
    }else{
      this.optionPlant = false;
    }
  }

  mapPlant(plantBoard : PlantBoard){
    this.plantSelected.idPlant = plantBoard.idPlant;
    this.plantSelected.name = plantBoard.name;
    this.plantSelected.country = plantBoard.country;
    this.plantSelected.urlFlag = plantBoard.urlFlag;
  }

  modifyPlantFun(state : boolean){
    this.modifyPlant = state;
  }

}
