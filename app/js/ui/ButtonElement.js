import BaseElement from './BaseElement'

export default class ButtonElement extends BaseElement {
    constructor(title, cssClasses){
        super();
        
        this.title = title;
        this.cssClasses = 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent ';

        if (cssClasses && cssClasses.length) {
            this.cssClasses += cssClasses.join(' ');
        }
    }

    getElementString() {
        return `
            <button class="${this.cssClasses}">
                ${this.title}
            </button>
        `;
    }
}