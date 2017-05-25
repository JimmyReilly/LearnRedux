var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {name: 'Anonymous'}, action) => {
    //state = state || {name: 'Anonymous'};

    switch (action.type){
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        default:
            return state;
    }
};
var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

//Subscribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('name is', state.name);
    document.getElementById('app').innerHTML = state.name;
});
//Unsuscribe from changes
// unsubscribe();

var currentState = store.getState();

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Jimmy'
});


store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Emily'
});

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