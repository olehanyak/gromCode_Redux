import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { weatherDataSelector } from "./weather.selectors";
import * as weatherActions from './weather.actions';

const Weather = ({ weatherData, getWeatherData }) => {
    // console.log(getWeatherData());
    console.log(weatherData);

    useEffect(() => {
        return getWeatherData();
    }, []);
    
    return (
        <main className="weather">
            <h1 className="weather__title">Weather data</h1>
            <ul className="cities-list">
                {weatherData.map((city) => (
                    <li key={city.id} className="city">
                        <span className="city__name">{city.name}</span>
                        <span className="city__temperature">{city.temperature}</span>
                    </li>
                ))}
            </ul>
        </main>
    );
};

const mapState = (state) => {
    return {
        weatherData: weatherDataSelector(state),
    };
};

const mapDispatch = {
    getWeatherData: weatherActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
