import React, { useState, useEffect } from "react";
import { Clock, CurrentDay } from "./Home.styled";


const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
        
        useEffect(() => {
            // Оновлюємо час щосекунди
            const timer = setInterval(() => {
                setCurrentTime(new Date());
            }, 1000);
    
            // Очищуємо таймер при розмонтуванні компонента
            return () => clearInterval(timer);
        }, []);

        const month = (currentTime.getMonth() + 1).toString().padStart(2, "0");
    const date = currentTime.getDate();
    const year = currentTime.getFullYear();

    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const seconds = currentTime.getSeconds().toString().padStart(2, "0");

    return (
        <>
            <CurrentDay>Поточна дата: {`${date}.${month}.${year}`}</CurrentDay>
            <Clock>Час: {`${hours}:${minutes}:${seconds}`}</Clock>
        </>
    )
};

export { Clock };