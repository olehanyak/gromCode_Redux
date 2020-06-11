import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counter';



const appReducer = combineReducers({
    counter: counterReducer,
});

const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;