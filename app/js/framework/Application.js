import ApplicationBase from './ApplicationBase';
import HomePage from '../pages/HomePage.js';

class Application  extends ApplicationBase {
    constructor() {
        super("Fleet Manager");

        this.addRoute('Home', new HomePage(), true);
        this.addRoute('About', null);
    }
}

export let application = new Application();