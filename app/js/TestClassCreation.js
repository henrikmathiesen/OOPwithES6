export default class TestClassCreation {

    constructor(id, name, privateInfo) {
        console.log("In TestClassCreation constructor " + "id: " + id + " name: " + name);

        // INSTANCE PROPERTIES: These are now attached to the instance, very common pattern to send information in and save it on the instance
        this.id = id;
        this.name = name;

        // private by convention
        this._private = privateInfo;
    }

    // STATIC METHOD - remember that instance properties, like this.id and this.name, dont exist in static methods (they belong to the instance, not the class)
    static getCompany() {
        return "Henry AB";
    }

    // INSTANCE METHOD
    fly() {
        console.log("Drone: " + this.id + " is flying");
    }

    // GETTERS AND SETTERS (not called like methods)

    get privateInfo() {
        return this._private + " TEMPORARY";
    }

    set privateInfo(value) {
        this._private = value;
    }
}

// STATIC PROPERTIE, on the class itself (we set it like this, outside the class)
TestClassCreation.maxHeight = 2000;