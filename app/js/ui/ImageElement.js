import BaseElement from './BaseElement'

export default class ImageElement extends BaseElement {
    constructor(src, cssClasses){
        super();
        this.src = src;
        this.cssClasses = cssClasses ? ' ' + cssClasses : '';
    }

    getElementString() {
        return `
            <img src="${this.src}" class="oo-image${this.cssClasses}" />
        `;
    }
}