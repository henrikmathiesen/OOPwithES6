import BaseElement from './BaseElement'

export default class ImageElement extends BaseElement {
    constructor(src, cssClasses){
        super();
        
        this.src = src;
        this.cssClasses = '';

        if (cssClasses && cssClasses.length) {
            this.cssClasses += cssClasses.join(' ');
        }
    }

    getElementString() {
        return `
            <img src="${this.src}" class="${this.cssClasses}" />
        `;
    }
}