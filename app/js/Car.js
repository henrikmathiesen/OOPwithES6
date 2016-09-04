import Vehicle from './Vehicle';

export default class Car extends Vehicle {
    
    constructor(licenseNumber){
        super(licenseNumber);
        this.gpsEnabled = false;
        console.log("Constructing a Car");
    }

}