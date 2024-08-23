import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-create-plant',
  templateUrl: './create-plant.component.html',
  styleUrls: ['./create-plant.component.css']
})
export class CreatePlantComponent {

  @Input() cratePlantState: boolean = true;
  @Output() event = new EventEmitter<boolean>();


  cancelCreatePlant(){
    this.event.emit(false);
  }

}
