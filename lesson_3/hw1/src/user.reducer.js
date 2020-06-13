import { SET_USER, REMOVE_USER } from "./user.actions";

// const initialState = {
//     user: null,
// };

export const userReducer = (state = null, action) => {
    switch (action.type) {
        case SET_USER: {
            return  action.payload.data;
            
        }
        case REMOVE_USER: {
            return null;

        }
        default:
            return state;
    }
}