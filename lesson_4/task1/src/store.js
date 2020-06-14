import { createStore, combineReducers } from 'redux';
import counterReducer from './counter.reducer';



// const appReducer = combineReducers({
//     language: languageReducer,
//     user: userReducer,
//     cart: cartReducer,
// });

const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;