const BASE_URL = "https://api.openweathermap.org/data/2.5" ;
const API_KEY = "37c65560e28a942d0039d17833653832" ;


const weatherDataReq = (type , data) => {
    let url = null;

    switch (type) {
        case "current":
            if (typeof data === "string"){
             url =  `${BASE_URL}/weather?q=${data}&appid=${API_KEY}&units=metric`;   
            } else {
            url = `${BASE_URL}/weather?lat=${data.latitude}&lon=${data.longitude}&appid=${API_KEY}&units=metric`;
            }
            
            break;
        case "forecast":
            if (typeof data === "string"){
                url =  `${BASE_URL}/forecast?q=${data}&appid=${API_KEY}&units=metric`;   
               } else {
               url = `${BASE_URL}/forecast?lat=${data.latitude}&lon=${data.longitude}&appid=${API_KEY}&units=metric`;
               }
               break;
    
        default:
            url =  `${BASE_URL}/weather?q=rasht&appid=${API_KEY}&units=metric`; 
            break;
    }
    return url;
};

export default weatherDataReq;
















// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}