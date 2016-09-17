import BaseElement from '../ui/BaseElement';

export default class Page extends BaseElement {
    constructor(pageTitle){
        super();
        this.pageTitle = pageTitle; // this is not used, but could be
    }
}