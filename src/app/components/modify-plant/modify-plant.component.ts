import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from 'src/app/entity/country';
import { Plant } from 'src/app/entity/plant';
import { CountrysService } from 'src/app/services/countrys.service';

@Component({
  selector: 'app-modify-plant',
  templateUrl: './modify-plant.component.html',
  styleUrls: ['./modify-plant.component.css']
})
export class ModifyPlantComponent implements OnInit{

  constructor(private serviceCountries : CountrysService){}

  @Input() modifyPlant: boolean = true;
  @Output() event = new EventEmitter<boolean>();
  @Input() plantModify !: Plant;
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
      'indexCountry' : new FormControl(this.plantModify.country, Validators.required)
    });

    
  }

  modifyPlantFun(){

  }

  cancelModify(){
    this.event.emit(false);
  }


}
