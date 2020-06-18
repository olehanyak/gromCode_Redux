import { fetchDataCity } from "./weather.gateway";

export const LIST_OF_CITIES = 'LIST_OF_CITIES';

export const getListOfCities = weatherData => {
    return {
        type: LIST_OF_CITIES,
        payload: {
            weatherData,
        }
    };
};

const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities';

export const getWeatherData = () => {
    return function (dispatch) {

        fetch(baseUrl)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('error')
                
            }).then((weatherData) => dispatch(getListOfCities(weatherData)));
    };
};