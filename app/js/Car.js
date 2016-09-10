import Vehicle from './Vehicle';

export default class Car extends Vehicle {
    
    constructor(miles, license, model){
        super(license, model);
        this.miles = miles;
        this.gpsEnabled = false;
        console.log("Constructing a Car");
    }

    stop(){
        super.stop();
        console.log("BREAK");
    }

}