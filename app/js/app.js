import TestClassCreation from './TestClassCreation';

let testClassCreation = new TestClassCreation("123", "Henry", "private info 1");

console.log(typeof TestClassCreation);                                  // function
console.log(typeof testClassCreation);                                  // object
console.log(testClassCreation instanceof TestClassCreation);            // true
console.log(testClassCreation.id);                                      // 123
console.log(testClassCreation['name']);                                 // Henry

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