export default class TestClassCreation {

    constructor(id, name){
        console.log("In TestClassCreation constructor " + "id: " + id + " name: " + name);
        
        // These are now attached to the instance
        this.id = id;
        this.name = name;
    }

} 