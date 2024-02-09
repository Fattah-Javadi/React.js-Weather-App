import React from 'react';
import styles from "./ForecastItem.module.css";

const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const ForecastItem = ({forecast}) => {
   
    return (
        <div className={styles.container}>
            <img src={`https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`} alt="weatherIcon" />
            <h4>{DAYS[new Date(forecast.dt * 1000).getDay()]}</h4>
            <p>{Math.round(forecast.main.temp)} °C</p>
            <span>{forecast.weather[0].main}</span>
        </div>
    );
};

export default ForecastItem;