import store from './store';
import { increment, decrement, reset } from './counter.actions';
import { addUser, deleteUser, updateUser } from './users.actions';


store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(reset());

store.dispatch(addUser({ name: 'Leo', id: 22 }));
store.dispatch(addUser({ name: 'Figaro', id: 90 }));

store.dispatch(deleteUser(90));
store.dispatch(updateUser(22, { name: 'Bruce Lee', age: 100 }));

