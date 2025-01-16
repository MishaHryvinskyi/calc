import React, { useState, useEffect } from "react";
import { Clock } from "./ClockComponent.styled";

const ClockComponent = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const seconds = currentTime.getSeconds().toString().padStart(2, "0");

    return <Clock>Час: {`${hours}:${minutes}:${seconds}`}</Clock>;
};

export default ClockComponent;