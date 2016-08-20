import TestClass from './TestClass';

let testClass = new TestClass();
testClass.sayHi();

//shouldNotBeGlobal = "No";
console.log(window.shouldNotBeGlobal);