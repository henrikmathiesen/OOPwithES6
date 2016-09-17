import ApplicationBase from './ApplicationBase';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';

class Application  extends ApplicationBase {
    constructor() {
        super("Fleet Manager");

        this.addRoute('Home', new HomePage(), true);
        this.addRoute('About', new AboutPage());
    }
}

export let application = new Application();