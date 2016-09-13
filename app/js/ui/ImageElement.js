import BaseElement from './BaseElement'

export default class ImageElement extends BaseElement {
    constructor(src){
        super();
        this.src = src;
    }

    getElementString() {
        return `
            <img src="${this.src}" class="oo-image" />
        `;
    }
}