import store from './store';
import { addUser, deleteUser } from './users.actions';


store.subscribe(() => {
    console.log('subscribe', store.getState());
})

store.dispatch(addUser({ name: 'Leo', id: 22 }));
store.dispatch(addUser({ name: 'Figaro', id: 90 }));

store.dispatch(deleteUser( 90 ));

