import BaseElement from './BaseElement'

export default class TitleElement extends BaseElement {
    constructor(title, cssClasses) {
        super();
        
        this.title = title;
        this.cssClasses = '';

        if (cssClasses && cssClasses.length) {
            this.cssClasses += cssClasses.join(' ');
        }
    }

    getElementString() {
        return `
            <h2 class="${this.cssClasses}">${this.title}</h2>
        `;
    }
}