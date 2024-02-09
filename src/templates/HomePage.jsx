import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./HomePage.module.css";
import { IoLocationOutline } from "react-icons/io5";
import weatherDataReq from '../services/apiReq';
import { timeFilter } from '../helpers/helper';
import Loader from '../components/Loader';
import ForecastItem from '../components/ForecastItem';
import CurrentWeather from '../components/CurrentWeather';
import Modal from '../components/Modal';

const HomePage = () => {
    const [cityValue , setCityValue] = useState("");
    const [currentData , setCurrentData ] = useState([]);
    const [forecastData , setForecastData] = useState([]);
    const [modal , setModal] = useState("");
    

    useEffect(()=>{
      locationHandler();
        
    },[])

    const positionCallback = (position) => {
      
      axios.all([
        axios.get(weatherDataReq("current",position.coords)) , 
        axios.get(weatherDataReq("forecast",position.coords)),
      ])
      .then(axios.spread((current,forecast) => {
        setCurrentData(current.data);
        setForecastData(timeFilter(forecast.data));
      }))
      .catch(err => setModal(err.message , "try again!"))
      
    };

    const errorCallback = (error) => {
      setModal( error.message);
    };
    // 'Error getting user location:',
   

    const searchHandler =  () => {
      if(!cityValue) {
        setModal("Please enter city name!")
        return ;
      }
      setCurrentData([]);
      setForecastData([]);
      axios.all([
        axios.get(weatherDataReq("current",cityValue)) , 
        axios.get(weatherDataReq("forecast",cityValue)) ,
      ])
      .then(axios.spread((current , forecast) => {
        
          
          setCurrentData(current.data);
          setForecastData(timeFilter(forecast.data));
      }))
      .catch(err =>  {
        setModal(err.response.data.message);
       
      } )
    };
      
      

    const locationHandler =  () => {
      setCurrentData([]);
      setForecastData([]);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(positionCallback,errorCallback);
              } else {
            setModal('Geolocation is not supported by this browser.');
          };

          setCityValue("");    
    };


    return (
        <>
           <div className={styles.header}>
           <IoLocationOutline onClick={locationHandler} />
           <input 
           type="text" 
           placeholder='Enter City Name' 
           value={cityValue} 
           onChange={(e) => setCityValue(e.target.value)}
           />
            <button onClick={searchHandler}>Search</button>
           </div>
           
                <div className={styles.currentWeather}>
                {(currentData.length === 0)
                ? <Loader /> 
                :  <CurrentWeather currentData={currentData} />
                }
               </div>

           <div className={styles.forecast}>
                {forecastData.map(item => (
                  <ForecastItem key={item.dt} forecast={item} />
                ))}
           </div>
           {modal && <Modal modal={modal} setModal={setModal} />}
        </>
    );
};

export default HomePage;