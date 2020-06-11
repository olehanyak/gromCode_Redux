import { ADD, DELETE } from './users.actions';



const initialState = {
    userList: [],
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                userList: state.userList.concat(action.user),
            }
        case DELETE:
            return {
                ...state,
                userList: state.userList.filter(user => user.id === action.user),
            }
       
        default:
            return state;
    }
};
