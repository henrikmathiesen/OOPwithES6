import Car from '../Car';
import Drone from '../Drone';
import DataError from './DataError';

export default class FleetDataService {

    constructor() {
        this.cars = [];
        this.drones = [];
        this.errors = [];
    }

    loadData(fleet) {
        for (let data of fleet) {
            switch (data.type) {
                case 'drone': {
                    let drone = this.loadDrone(data);
                    this.drones.push(drone);
                    break;
                }
                case 'car': {
                    let car = this.loadCar(data);
                    this.cars.push(car);
                    break;
                }
                default: {
                    let e = new DataError("Invalid type", data);
                    this.errors.push(e);
                }
            }
        }
    }

    loadDrone(drone) {
        try {
            return new Drone(drone.airTimeHours, drone.base, drone.model, drone.license);
        }
        catch(e) {
            this.errors.push(new DataError("Error loading drone", drone));
        }
        return null;
    }

    loadCar(car) {
        try {
            return new Car(car.miles, car.license, car.model);
        }
        catch(e) {
            this.errors.push(new DataError("Error loading car", car));
        }
        return null;
    }

}