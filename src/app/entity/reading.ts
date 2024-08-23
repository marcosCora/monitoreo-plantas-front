import { Alert } from "./alert";

export class Reading {

    idReading : number;
    typeReading : string;
    value : number;
    alert : Alert;

    constructor() {
        this.idReading = 0;
        this.typeReading = "";
        this.value = 0;
        this.alert = new Alert();
    }
}
