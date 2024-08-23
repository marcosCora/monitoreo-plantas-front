export class Plant {
    idPlant : number;
    name : string;
    country : string;
    cantReadings : number;
    cantAlertMedium :  number;
    cantAlertRed : number;
    sensorsDisiabled : number;

    constructor() {
        this.idPlant = 0;
        this.name = "";
        this.country = "";
        this.cantReadings = 0;
        this.cantAlertMedium = 0;
        this.cantAlertRed = 0;
        this.sensorsDisiabled = 0;
    }

}
