export default class TestClassCreation {

    constructor(id, name){
        console.log("In TestClassCreation constructor " + "id: " + id + " name: " + name);
        
        // INSTANCE PROPERTIES: These are now attached to the instance, very common pattern to send information in and save it on the instance
        this.id = id;
        this.name = name;
    }

}

// STATIC PROPERTIE, on the class itself
TestClassCreation.maxHeight = 2000;