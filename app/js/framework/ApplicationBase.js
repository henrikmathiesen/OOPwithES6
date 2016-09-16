import TitleElement from '../ui/TitleElement';

export default class ApplicationBase {
    constructor(title) {
        this.title = title;
        this.titleBar = new TitleElement(this.title);
    }
}