
export const SET_USER = 'SET_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const setUser = (data) => {
    return {
        type: SET_USER,
        payload: { data },
    };
};

export const removeUser = () => {
    return {
        type: REMOVE_USER,
    };
};