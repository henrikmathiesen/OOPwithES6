import BaseElement from './BaseElement'

export default class TitleElement extends BaseElement {
    constructor(title, cssClasses) {
        super();

        this.title = title;
        this.cssClasses = '';

        if (cssClasses && cssClasses.length) {
            this.cssClasses += cssClasses.join(' ');
        }

        this.links = [];
    }

    addLink(title, href) {
        this.links.push({ title, href });
    }

    getElementString() {
        let links = '';

        for (let link of this.links) {
            links += `<li><a href="${link.href}">${link.title}</a></li>`;
        }

        return `
            <div id="oo-app-title">
                <h2 class="${this.cssClasses}">${this.title}</h2>
                <ul>
                    ${links}
                </ul>
            </div>
            <div id="page-content"></div>
        `;
    }
}