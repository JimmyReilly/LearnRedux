var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
    name: 'Anonymous',
    hobbies: [],
    movies: []
};
var nextHobbyId = 1;
var nextMovieId = 1;

var nameReducer = (state = 'Anonymous', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    }
}

var hobbiesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            return [
                ...state,
                {
                    id: nextHobbyId++,
                    hobby: action.hobby
                }
            ];
        case 'REMOVE_HOBBY':
            return state.filter((hobby) => hobby.id !== action.id)
        default:
            return state;
    }
}

var moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return [
                ...state,
                {
                    id: nextMovieId++,
                    title: action.title, 
                    genre: action.genre
                }
            ]
        case 'REMOVE_MOVIE':
            return state.filter((movie) => movie.id !== action.id)
        default:
            return state;
    }
}

var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer
});

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

//Subscribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('name is', state.name);
    document.getElementById('app').innerHTML = state.name;

    console.log('New state', store.getState());
});
//Unsuscribe from changes
// unsubscribe();

var currentState = store.getState();

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Jimmy'
});

store.dispatch({
    type: "ADD_HOBBY",
    hobby: 'Running'
});

store.dispatch({
    type: "ADD_HOBBY",
    hobby: 'Walking'
});

store.dispatch({
    type: "REMOVE_HOBBY",
    id: 2 
});

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Emily'
});

store.dispatch({
    type: 'ADD_MOVIE',
    name: 'Mad Max',
    genre: 'Action'
});

store.dispatch({
    type: 'ADD_MOVIE',
    name: 'Star Wars',
    genre: 'Action'
});

store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 1
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