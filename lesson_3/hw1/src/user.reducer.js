import { SET_USER, REMOVE_USER } from "./user.actions";

const initialState = {
    user: null,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                user: action.payload.data,
            };
        }
        case REMOVE_USER: {
            return {
                ...state,
            }

        }
        default:
            return state;
    }
}