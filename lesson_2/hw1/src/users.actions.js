
export const ADD = 'ADD_USER';
export const DELETE = 'DELETE_USER';


export const addUser = (data) => {
    return {
        type: ADD,
        user: data,
    }
};

export const deleteUser = (id) => {
    return {
        type: DELETE,
        id,
    }

};

