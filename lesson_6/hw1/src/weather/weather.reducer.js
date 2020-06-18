import { LIST_OF_CITIES } from "./weather.actions";

const initialState = {
    weatherData: [],
};

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_OF_CITIES:
            return {
                ...state,
                weatherData: action.payload.weatherData,
            }
        default:
            return state;
    }
};

// export default weatherReducer;