import BaseElement from '../ui/BaseElement';
import ImageElement from '../ui/ImageElement';


export default class HomePage extends BaseElement {
    constructor() {
        super();
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