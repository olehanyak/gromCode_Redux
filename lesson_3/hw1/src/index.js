
import store from './store';
import { setLanguage } from './language.actions';
import { removeProduct, addProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';



store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(setLanguage('jp'));

store.dispatch(addProduct({ id: 333, name: 'water' }));
store.dispatch(addProduct({ id: 113, name: 'cake' }));
store.dispatch(removeProduct(333));

store.dispatch(setUser({ name: 'Norman' }));
store.dispatch(removeUser());
