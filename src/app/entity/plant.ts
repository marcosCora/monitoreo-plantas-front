import { Reading } from "./reading";

export class Plant {
    idPlant : number;
    name : string;
    country : string;
    urlFlag : string;
    readings : Reading[];
    sensorsDisiabled : number;

    constructor() {
        this.idPlant = 0;
        this.name = "";
        this.country = "";
        this.urlFlag = "";
        this.readings = [];
        this.sensorsDisiabled = 0;
    }

}
