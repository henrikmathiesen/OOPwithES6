import TestClassCreation from './TestClassCreation';
import { Multiple01, Multiple02 } from './exportMultiple';
import Car from './Car';
import Drone from './Drone';
import {fleet} from './services/fleetData';
import FleetDataService from './services/FleetDataService';


let testClassCreation = new TestClassCreation("123", "Henry", "private info 1");

console.log(typeof TestClassCreation);                                  // function
console.log(typeof testClassCreation);                                  // object
console.log(testClassCreation instanceof TestClassCreation);            // true
console.log(testClassCreation.id);                                      // 123
console.log(testClassCreation['name']);                                 // Henry (can index into properties)

let testClassCreationToo = new TestClassCreation("335", "Twirl", "private info 2");

console.log("testClassCreation id: " + testClassCreation.id + " testClassCreationToo id: " + testClassCreationToo.id);          // logging instance properties

console.log(testClassCreation.maxHeight);                                                                                       // undefined, since its a class property, not an instance property
console.log(TestClassCreation.maxHeight);                                                                                       // 2000

testClassCreation.fly();                                                                                                        // calling instance methods
testClassCreationToo.fly();

console.log(TestClassCreation.getCompany());                                                                                    // calling static method

console.log(testClassCreation.privateInfo);                                                                                     // calling getter

testClassCreation.privateInfo = "private info x";                                                                               // calling setter

console.log(testClassCreation.privateInfo);                                                                                     // calling getter again, set info reflected


// TEST EXPORT/IMPORT MULTIPLE CLASSES (not really best practice but I want to test it)

let multiple01 = new Multiple01();
let multiple02 = new Multiple02();

// INHERITENCE

let car01 = new Car();                                                                                                          // This is executing the constructor in vehicle, its base class
let drone01 = new Drone();                                                                                                      // Same here, of course
                                                                                                                                // The constructor in Car is also executed, when having a constructor in a derived class then it MUST call parent constructor 
                                                                                                                                // with super() (first line), even if parent class does not have one in code (classes always have constructors behind the scenes)

console.log(car01 instanceof Car);                                                                                              // true
console.log(drone01 instanceof Drone);                                                                                          // true
// car01 and drone01 is also an instance of vehicle, and they are instance of Object

let car02 = new Car("B52");                                                                                                     // Passing argument to constructor in Car which passes it to constructor in vehicle
console.log(car02.licenseNumber);

console.log(car02.gpsEnabled);                                                                                                  // Inherited property from vehicle, overwritten in Car (do it after super() call)

car02.start();                                                                                                                  // Call an inherited method
car02.stop();                                                                                                                   // Call overwritten inherited method
// user super.stop(); in Car's stop() to ALSO call vehicle's stop() 
// In a method it is ok to call super() after other logic

Car.getCompanyName();                                                                                                           // Static methods can also be inherited
                                                                                                                                // Can also be overwritten
                                                                                                                                // Can also call super() in overide static method


// USING THE FLEET DATA SERVICE

let dataService = new FleetDataService();
dataService.loadData(fleet);