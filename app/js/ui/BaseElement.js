import $ from 'jquery';

export default class BaseElement {

    constructor() {
        this.element = null; // jQuery object
    }

    appendToElement(elementToAppendTo) { 
        this.createElement();
        elementToAppendTo = $(elementToAppendTo);
        elementToAppendTo.append(this.element);
    }

    createElement() {
        let s = this.getElementString();
        this.element = $(s);
    }

    getElementString() {
        throw "Please override getElementString() in BaseElement";
    }

    // Seems not needed
    // refreshMaterialElement(){
    //     componentHandler.upgradeElement(this.element[0]);
    // }

}