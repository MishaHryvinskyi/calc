import React, { useState } from "react";
import Weather from "components/Weather/Weather";
import ClockComponent from "components/ClockComponent/ClockComponent";
import { CurrentDay } from "./Home.styled";
import { days } from "DB/data";

const Home = () => {
    const [currentTime] = useState(new Date());
    
    const day = days[currentTime.getDay()]
    const month = (currentTime.getMonth() + 1).toString().padStart(2, "0");
    const date = currentTime.getDate();
    const year = currentTime.getFullYear();

    return (
        <>
            <CurrentDay>Поточна дата: {`${day} ${date}.${month}.${year}`}</CurrentDay>
            <ClockComponent/>
            <Weather />
        </>
    );
};

export default Home;