
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const addProduct = (data) => {
    return {
        type: ADD_PRODUCT,
        payload: { data },
    }
}

export const removeProduct = (productId) => {
    return {
        type: REMOVE_PRODUCT,
        payload: { productId },
    }
}