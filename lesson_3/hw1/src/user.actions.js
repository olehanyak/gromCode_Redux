
export const SET_USER = 'SET_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const setUser = () => {
    return {
        type: SET_USER,
    };
};

export const removeUser = () => {
    return {
        type: REMOVE_USER,
    };
};