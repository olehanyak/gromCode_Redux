import { ENGLAND, UKRAINE } from "./language.actions";

const initialState = {
    language: 'en',
};

export const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ENGLAND: {
            return {
                ...state,
               
            };
        }
        default:
            return state;
    }
}