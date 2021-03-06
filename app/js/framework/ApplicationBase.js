import $ from 'jquery';
import TitleElement from '../ui/TitleElement';

export default class ApplicationBase {
    constructor(title) {
        this.title = title;
        this.titleBar = new TitleElement(this.title, ['oo-text-center']);
        this.routeMap = {};
        this.defaultRoute = null;
    }

    addRoute(id, pageObject, defaultRoute = false){
        this.titleBar.addLink(id, '/#' + id);
        this.routeMap[id] = pageObject;

        if(defaultRoute) {
            this.defaultRoute = id;
        }
    }

    activateRoute(route){
        let content = $('#page-content');
        content.empty();

        this.routeMap[route].appendToElement(content);
    }

    show(element) {
        this.titleBar.appendToElement(element);

        this.titleBar.element.find('a').on('click', (event) => {
            let route = event.target.innerHTML;
            this.activateRoute(route);
        });

        if(this.defaultRoute) {
            this.activateRoute(this.defaultRoute);
        }
    }
}