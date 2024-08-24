export class PlantBoard {
    idPlant : number;
    name : string;
    country : string;
    urlFlag : string;
    cantReadingOk : number;
    cantReadings : number;
    cantAlertMedium :  number;
    cantAlertRed : number;
    sensorsDisiabled : number;

    constructor() {
        this.idPlant = 0;
        this.name = "";
        this.country = "";
        this.urlFlag = "";
        this.cantReadings = 0;
        this.cantReadingOk = 0;
        this.cantAlertMedium = 0;
        this.cantAlertRed = 0;
        this.sensorsDisiabled = 0;
    }
}
