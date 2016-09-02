import TestClassCreation from './TestClassCreation';

let testClassCreation = new TestClassCreation();

console.log(typeof TestClassCreation);                                  // function
console.log(typeof testClassCreation);                                  // object
console.log(testClassCreation instanceof TestClassCreation);            // true