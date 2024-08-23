import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from 'src/app/entity/country';
import { Plant } from 'src/app/entity/plant';
import { CountrysService } from 'src/app/services/countrys.service';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-create-plant',
  templateUrl: './create-plant.component.html',
  styleUrls: ['./create-plant.component.css']
})
export class CreatePlantComponent implements OnInit{

  constructor(private serviceCountries : CountrysService, private servicePlant : PlantService){}

  @Input() cratePlantState: boolean = true;
  @Output() event = new EventEmitter<boolean>();
  countries : Country[]= [];
  formCreatePlant !: FormGroup;


  ngOnInit(): void {
    this.serviceCountries.getCountrys().subscribe((response) =>{
      this.countries = response;
      console.log(this.countries);
    },
    (error)=>{
      console.log(error, "Error api");
    })

    this.formCreatePlant = new FormGroup({
      'name' : new FormControl('', Validators.required),
      'indexCountry' : new FormControl('', Validators.required)
    });
    

  }

  addPlant(){
    if(!this.formCreatePlant.invalid){
      let indexCountry = this.formCreatePlant.controls['indexCountry'].value;
      let plant : Plant = new Plant();
      plant.name = this.formCreatePlant.controls['name'].value;
      plant.country = this.countries[indexCountry].name
      plant.urlFlag = this.countries[indexCountry].urlFlag;
      console.log(plant);
      this.cancelCreatePlant();
      this.servicePlant.postPlant(plant).subscribe((response)=>{
        console.log(response);
      },
      (error)=>{
      console.log(error);
      
    })
      
      
    }
  }



  cancelCreatePlant(){
    this.event.emit(false);
  }

}
