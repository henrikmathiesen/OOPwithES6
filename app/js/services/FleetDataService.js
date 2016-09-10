import Car from '../Car';
import Drone from '../Drone';

export default class FleetDataService {

    constructor() {
        this.cars = [];
        this.drones = [];
    }

    loadData(fleet) {
        for(let data of fleet) {
            switch(data.type) {
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
            }
        }
    }

    loadDrone(drone){
        return new Drone(drone.airTimeHours, drone.base, drone.model, drone.license);
    }

    loadCar(car){
        return new Car(car.miles, car.license, car.model);
    }

}