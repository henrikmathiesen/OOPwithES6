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
        catch (e) {
            this.errors.push(new DataError("Error loading drone", drone));
        }
        return null;
    }

    loadCar(car) {
        try {
            return new Car(car.miles, car.license, car.model);
        }
        catch (e) {
            this.errors.push(new DataError("Error loading car", car));
        }
        return null;
    }

    getCarByLicense(license) {
        let car = this.cars.find(function(car) {
            return car.license === license;
        });

        return car;
    }

    getCarsSorted(){
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        var sortedCars = this.cars.sort(function(car1, car2){
            if(car1.license < car2.license) {
                return -1;
            }
            if(car1.license > car2.license) {
                return 1;
            }
            return 0;
        });

        return sortedCars;
    }

}