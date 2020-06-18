export const SHOW_SPINNER = "SPINNER/SHOW_SPINNER";
export const USER_DATA_RECIEVED = "USER/USER_DATA_RECIEVED";
import { getUserData } from "./user.gateway";


export const showSpinner = () => {
    return {
        type: SHOW_SPINNER,
    };
};

export const userDataRecieved = (userData) => {
    return {
        type: USER_DATA_RECIEVED,
        payload: {
            userData,
        }
    };
};

export const fetchUserData = (userName) => {
    return function (dispatch, getState) {
        dispatch(showSpinner());
        getUserData(userName)
            .then((userData) => {
                dispatch(userDataRecieved(userData));
            });
    }
};