// import React, { useState } from "react";
// import "./WeatherApp.css";
// import search_icon from "../Assets/search.png";
// import wind_icon from "../Assets/wind.png";
// import snow_icon from "../Assets/snow.png";
// import rain_icon from "../Assets/rain.png";
// import clear_icon from "../Assets/clear.png";
// import cloud_icon from "../Assets/cloud.png";
// import drizzle_icon from "../Assets/drizzle.png";
// import humidity_icon from "../Assets/humidity.png";

// const WeatherApp = () => {
//     let api_key="0b9e1051d426f7336dab823fd356c8aa";
//     const [wicon,setWicon]=useState(cloud_icon);
//     const search=async()=>{
//         const element=document.getElementsByClassName('cityInput');
//         if(element[0].value===""){
//             return 0;
//         }
//         let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
//         let response=await fetch(url);
//         let data=await response.json();
//         const humidity=document.getElementsByClassName('humidity-percent');
//         const wind=document.getElementsByClassName('wind-rate');
//         const temperature=document.getElementsByClassName('weather-temp');
//         const location=document.getElementsByClassName('weather-location')
//         humidity[0].innerHTML=data.main.humidity+" %";
//         wind[0].innerHTML=Math.floor(data.wind.speed)+" km/h";
//         temperature[0].innerHTML=Math.floor(data.main.temp)+" °c";
//         location[0].innerHTML=data.name;
//         if((data.weather[0].icon==="01d")||(data.weather[0].icon==="01n")){
//             setWicon(clear_icon);
//         }else if((data.weather[0].icon==="02d")||(data.weather[0].icon==="02n")){
//             setWicon(cloud_icon);
//         }else if((data.weather[0].icon==="03d")||(data.weather[0].icon==="03n")){
//             setWicon(drizzle_icon);
//         }else if((data.weather[0].icon==="04d")||(data.weather[0].icon==="04n")){
//             setWicon(drizzle_icon);
//         }else if((data.weather[0].icon==="09d")||(data.weather[0].icon==="09n")){
//             setWicon(rain_icon);
//         }else if((data.weather[0].icon==="10d")||(data.weather[0].icon==="10n")){
//             setWicon(rain_icon);
//         }else if((data.weather[0].icon==="13d")||(data.weather[0].icon==="13n")){
//             setWicon(snow_icon);
//         }else{
//             setWicon(clear_icon);
//         }

//     }
//   };
//   return (
//       <div className="container">
//         <div className="top-bar">
//           <input
//             type="text"
//             className="cityInput"
//             placeholder="search for the place"
//           />
//           <div
//             className="search-icon"
//             onClick={() => {
//               search();
//             }}
//           >
//             <img src={search_icon} alt="" />
//           </div>
//         </div>
//         <div className="weather-image">
//           <img src={wicon} alt="" />
//         </div>
//         <div className="weather-temp">25°c</div>
//         <div className="weather-location">London</div>
//         <div className="data-container">
//           <div className="element">
//             <img src={humidity_icon} alt="" className="icon" />
//             <div className="data">
//               <div className="humidity-percent">64%</div>
//               <div className="text">Humidity</div>
//             </div>
//           </div>
//           <div className="element">
//             <img src={wind_icon} alt="" className="icon" />
//             <div className="data">
//               <div className="wind-rate">18 km/hr</div>
//               <div className="text">Wind Speed</div>
//             </div>
//           </div>
//         </div>
//       </div>
//   );
// };

// export default WeatherApp;


import React, { useState } from "react";
import "./WeatherApp.css";
import search_icon from "../Assets/search.png";
import wind_icon from "../Assets/wind.png";
import snow_icon from "../Assets/snow.png";
import rain_icon from "../Assets/rain.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";

const WeatherApp = () => {
    let api_key="0b9e1051d426f7336dab823fd356c8aa";
    const [wicon,setWicon]=useState(cloud_icon);

    const search = async () => {
        const element=document.getElementsByClassName('cityInput');
        if(element[0].value===""){
            return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`
        try {
            let response=await fetch(url);
            let data=await response.json();
            const humidity=document.getElementsByClassName('humidity-percent');
            const wind=document.getElementsByClassName('wind-rate');
            const temperature=document.getElementsByClassName('weather-temp');
            const location=document.getElementsByClassName('weather-location');
            humidity[0].innerHTML=data.main.humidity+" %";
            wind[0].innerHTML=Math.floor(data.wind.speed)+" km/h";
            temperature[0].innerHTML=Math.floor(data.main.temp)+" °C";
            location[0].innerHTML=data.name;
            switch(data.weather[0].icon) {
                case "01d":
                case "01n":
                    setWicon(clear_icon);
                    break;
                case "02d":
                case "02n":
                    setWicon(cloud_icon);
                    break;
                case "03d":
                case "03n":
                case "04d":
                case "04n":
                    setWicon(drizzle_icon);
                    break;
                case "09d":
                case "09n":
                case "10d":
                case "10n":
                    setWicon(rain_icon);
                    break;
                case "13d":
                case "13n":
                    setWicon(snow_icon);
                    break;
                default:
                    setWicon(clear_icon);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
      <>
      <h1>My Weather App</h1>
              <div className="container">
            <div className="top-bar">
                <input
                    type="text"
                    className="cityInput"
                    placeholder="Search for the place"
                />
                <div
                    className="search-icon"
                    onClick={() => {
                        search();
                    }}
                >
                    <img src={search_icon} alt="search icon" />
                </div>
            </div>
            <div className="weather-image">
                <img src={wicon} alt="weather icon" />
            </div>
            <div className="weather-temp">25°C</div>
            <div className="weather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="humidity icon" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="wind icon" className="icon" />
                    <div className="data">
                        <div className="wind-rate">18 km/hr</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
      </>

    );
};

export default WeatherApp;
