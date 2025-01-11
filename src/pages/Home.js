import React, { useState, useEffect } from "react";

const Home = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Оновлюємо час щосекунди
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Очищуємо таймер при розмонтуванні компонента
        return () => clearInterval(timer);
    }, []);

   
    const month = (currentTime.getMonth() + 1).toString().padStart(2, "0"); // Місяць починається з 0, тому додаємо 1
    const date = currentTime.getDate();
    const year = currentTime.getFullYear();

    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const seconds = currentTime.getSeconds().toString().padStart(2, "0");

    return (
        <>
            <h1>Привіт!</h1>
            <p>Поточна дата: {`${date}.${month}.${year}`}</p>
            <p>Час: {`${hours}:${minutes}:${seconds}`}</p>
        </>
    );
};

export default Home;