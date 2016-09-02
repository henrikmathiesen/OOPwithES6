import TestClassCreation from './TestClassCreation';

let testClassCreation = new TestClassCreation("123", "Henry");

console.log(typeof TestClassCreation);                                  // function
console.log(typeof testClassCreation);                                  // object
console.log(testClassCreation instanceof TestClassCreation);            // true
console.log(testClassCreation.id);                                      // 123
console.log(testClassCreation['name']);                                 // Henry

let testClassCreationToo = new TestClassCreation("335", "Twirl");

console.log("testClassCreation id: " + testClassCreation.id + " testClassCreationToo id: " + testClassCreationToo.id);

console.log(testClassCreation.maxHeight);                               // undefined, since its a class property, not an instance property
console.log(TestClassCreation.maxHeight);                               // 2000