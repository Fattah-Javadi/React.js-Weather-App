import React from 'react';
import styles from "./CurrentWeather.module.css";

const CurrentWeather = ({currentData}) => {
    return (
        <div className={styles.currentWeather}>
                     
                 <h2>{currentData.name} , {currentData.sys.country}</h2>
                <div className={styles.temp}>
                    <img src={`https://openweathermap.org/img/w/${currentData.weather[0].icon}.png`} alt="weather icon" />
                    <span>{currentData.weather[0].main}</span>
                    <p>{Math.round(currentData.main.temp)} °C</p>
                </div> 
                <div className={styles.info}>
                    <p>Humidity:
                        <span>{currentData.main.humidity} %</span>
                    </p>
                    <p>Wind Speed:
                        <span>{currentData.wind.speed} m/s</span>
                    </p>
                </div>
                
        </div>
    );
};

export default CurrentWeather;