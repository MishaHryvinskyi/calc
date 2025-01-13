import React, { useState, useEffect } from "react";
import { getWeather } from "API/api";
import { WeatherContainer, IconWrap } from "./Weather.styled";
import Loader from "components/Loader/Loader";

const Weather = () => {
const [wether, setWether] = useState(null);
useEffect(() => {
    getWeather()
        .then(data => {
            if (data && data.location && data.current) {
                setWether(data);
            } else {
                console.error("Unexpected API response format", data);
            }
        })
        .catch(error => {
            console.error("Failed to fetch weather:", error);
        });
}, [wether]);
    return (
        <div>
            {(wether) ? (
            <WeatherContainer>
                <p>Погода в місті: {wether?.location?.name}</p>
                <p>Температура: {wether?.current?.temp_c} °C</p>
                <IconWrap>
                    <p>{wether?.current?.condition?.text}</p>
                    <img
                        src={wether?.current?.condition?.icon}
                        alt={wether?.current?.condition?.text}
                        width={60}
                    />
                </IconWrap>
                
            </WeatherContainer>
        ) : (
            <WeatherContainer>
                <Loader/>
            </WeatherContainer>
        )}
    </div>
    )
}

export default Weather;