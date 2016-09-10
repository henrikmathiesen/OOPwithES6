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
                case 'drone':
                    this.drones.push(data);
                    break;
                case 'car':
                    this.cars.push(data);
                    break;
            }
        }
    }

}