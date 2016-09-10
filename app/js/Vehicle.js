export default class Vehicle {

    constructor(license, model) {

        this.gpsEnabled = true;
        this.license = license;
        this.model = model;

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