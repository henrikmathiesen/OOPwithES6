import Vehicle from './Vehicle';

export default class Drone extends Vehicle {
    constructor(airTimeHours, base, model, license) {
        super(license, model);
        this.airTimeHours = airTimeHours;
        this.base = base;
    }
}