// var shouldNotBeGlobal = "Foo"; (its not)

var someFunction = function(){
    console.log("someFunction");
}

var someFunctionToo = function(){
    console.log("someFunctionToo");
}

// One way of exporting
// module.exports.someFunction = someFunction;
// module.exports.someFunctionToo = someFunctionToo;

// Another way of exporting
module.exports = {
    someFunction: someFunction,
    someFunctionToo: someFunctionToo
};