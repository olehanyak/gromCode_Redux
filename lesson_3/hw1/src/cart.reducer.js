import { ADD_PRODUCT, REMOVE_PRODUCT } from "./cart.actions";

const initialState = {
    products: [],
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            return {
                ...state,
                products: state.products.concat(action.payload.data)
            };
        }
        case REMOVE_PRODUCT: {
            const newList = state.products.filter(
                elem => elem.id !== action.payload.productId
            )
            return {
                ...state,
                products: newList,
            };
        }
        default:
            return state;
    }
};