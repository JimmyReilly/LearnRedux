var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {name: 'Anonymous'}, action) => {
    //state = state || {name: 'Anonymous'};

    return state;
};
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);

/// PURE FUNCTION EXAMPLE

// // Pure function
// function add (a, b) {
//     return a + b;
// }

// // Not pure functions
// var a = 3;
// function add (a) {
//     return a + b;
// }

// var result;
// function add (a, b) {
//     result = a + b;
//     return result;
// }

// function add (a, b) {
//     return a + b + new Date().getSeconds();
// }

// Made a pure funciton, doesn't change any outside values
// function changeProp(obj) {
//     return {
//         ...obj,
//         name: 'Jen'
//     };
//     // obj.name = 'Jen';
//     // return obj;
// }

// var startingValue = {
//     name: 'Jimmy',
//     age: 25
// }

// var res = changeProp(startingValue);
// console.log(startingValue);
// console.log(res);