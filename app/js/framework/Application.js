import ApplicationBase from './ApplicationBase';

class Application  extends ApplicationBase {
    constructor() {
        super("Fleet Manager");

        this.addRoute('Home', null, true);
        this.addRoute('About', null);
    }
}

export let application = new Application();