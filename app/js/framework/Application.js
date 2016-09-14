import ApplicationBase from './ApplicationBase';

class Application  extends ApplicationBase {
    constructor() {
        super("Fleet Manager");
    }
}

export let application = new Application();