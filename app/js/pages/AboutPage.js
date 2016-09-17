import Page from './Page';

export default class AboutPage extends Page {

    constructor() {
        super("About Page");
    }

    createElement() {
        super.createElement();
    }

    getElementString() {
        return '<div class="oo-text-center">About Page</div>'; 
    }

}