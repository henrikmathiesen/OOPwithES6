export default class Vehicle {

    constructor(licenseNumber) {

        this.gpsEnabled = true;
        this.licenseNumber = licenseNumber;

        console.log("Constructing a Vehicle");

    }

    start() {
        console.log("Starting Vehicle");
    }

    stop() {
        console.log("STOPPING");
    }

    static getCompanyName() {
        console.log("My Company");
    }

}