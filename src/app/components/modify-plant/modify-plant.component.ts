import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from 'src/app/entity/country';
import { Plant } from 'src/app/entity/plant';
import { PlantBoard } from 'src/app/entity/plant-board';
import { CountrysService } from 'src/app/services/countrys.service';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-modify-plant',
  templateUrl: './modify-plant.component.html',
  styleUrls: ['./modify-plant.component.css']
})
export class ModifyPlantComponent implements OnInit{

  constructor(private serviceCountries : CountrysService, private servicePlant : PlantService){}

  @Input() modifyPlant: boolean = true;
  @Output() event = new EventEmitter<boolean>();
  @Input() plantModify !: PlantBoard;
  formModify !: FormGroup;
  countries : Country[] = [];

  ngOnInit(): void {
    this.serviceCountries.getCountrys().subscribe((response) =>{
      this.countries = response;
      console.log(this.countries);
    },
    (error)=>{
      console.log(error, "Error api");
    })

    this.formModify = new FormGroup({
      'name' : new FormControl(this.plantModify.name , Validators.required),
      'cantReadings' : new FormControl('' , Validators.required),
      'cantAlertMedium' : new FormControl('' , Validators.required),
      'sensorsDisiabled' : new FormControl('' , Validators.required),
      'indexCountry' : new FormControl(this.plantModify.country , Validators.required),
      'readingsOk' : new FormControl('' , Validators.required),
      'cantAlertRed' : new FormControl('' , Validators.required),
    });
  }

  modifyPlantFun(){
    if(!this.formModify.invalid){
        this.plantModify.name = this.formModify.controls['name'].value;   
        let indexCountry = this.formModify.controls['indexCountry'].value;
         this.plantModify.country = this.countries[indexCountry].name;   
        this.plantModify.urlFlag = this.countries[indexCountry].urlFlag;     
        this.plantModify.sensorsDisiabled = this.formModify.controls['sensorsDisiabled'].value;  
        let totalReadings = this.formModify.controls['cantReadings'].value;  
        let alertsOk = this.formModify.controls['readingsOk'].value;
        let alertMediums = this.formModify.controls['cantAlertMedium'].value;
        let alertRed = this.formModify.controls['cantAlertRed'].value;

        if(totalReadings == (alertMediums+alertRed+alertsOk)){
          this.plantModify.cantAlertMedium = alertMediums;
          this.plantModify.cantAlertRed = alertRed;
          this.plantModify.cantReadingOk = alertsOk;
          this.plantModify.cantReadings = totalReadings;
          
          this.servicePlant.putPlant(this.plantModify).subscribe(
            (response)=>{
              console.log(response);
              this.cancelModify();
            },
            (error)=>{
              console.log(error);
              this.cancelModify();
            }
          );
          

        }

    }

  }

  cancelModify(){
    this.event.emit(false);
  }


}
