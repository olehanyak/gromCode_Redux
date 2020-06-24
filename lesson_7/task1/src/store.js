import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { tasksReducer } from './tasks/task.reducer';

const reducer = combineReducers({
    tasks: tasksReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,
    composeEnhancers(applyMiddleware(thunk))
);

console.log(store.getState());

export default store;