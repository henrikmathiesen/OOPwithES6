import Vehicle from './Vehicle';

export default class Car extends Vehicle {
    
    constructor(licenseNumber){
        super(licenseNumber);
        console.log("Constructing a Car");
    }

}