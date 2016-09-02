import TestClassCreation from './TestClassCreation';

let testClassCreation = new TestClassCreation("123", "Henry");

console.log(typeof TestClassCreation);                                  // function
console.log(typeof testClassCreation);                                  // object
console.log(testClassCreation instanceof TestClassCreation);            // true
console.log(testClassCreation.id);                                      // 123
console.log(testClassCreation.name);                                    // Henry