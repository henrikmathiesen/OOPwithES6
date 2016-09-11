import $ from 'jquery';

export default class BaseElement {

    constructor(){
        this.element = null; // jQuery object
    }

    createElement(selector){
        this.element = $(selector);
    }

    getElementString(){

    }

}