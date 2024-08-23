export class PlantBoard {
    idPlant : number;
    name : string;
    nameCountry : string;
    urlCountry : string
    cantReadings : number;
    cantAlertMedium :  number;
    cantAlertRed : number;
    sensorsDisiabled : number;

    constructor() {
        this.idPlant = 0;
        this.name = "";
        this.nameCountry = "";
        this.urlCountry = "";
        this.cantReadings = 0;
        this.cantAlertMedium = 0;
        this.cantAlertRed = 0;
        this.sensorsDisiabled = 0;
    }
}
