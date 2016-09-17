import ImageElement from '../ui/ImageElement';
import Page from './Page';


export default class HomePage extends Page {
    constructor() {
        super("Home Page");
    }

    createElement() {
        super.createElement();

        let img = new ImageElement('app/img/cat.jpg', ['oo-image']);
        img.appendToElement(this.element);
    }

    getElementString() {
        return '<div class="oo-text-center"></div>'; 
    }
}