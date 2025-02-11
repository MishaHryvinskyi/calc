import axios from "axios";

const API = process.env.REACT_APP_DB;
const WATHER_URL = 'https://api.weatherapi.com/v1';
const WATHER_API_KEY = process.env.REACT_APP_WATHER_API_KEY;
const WEATHER_API = `${WATHER_URL}/forecast.json?key=${WATHER_API_KEY}&q=kosiv&days=1&lang=uk`;

const getUsers = async () => {
    const allUsers = await axios.get(API);
    return allUsers;
};

const createUsers = async (newUser) => {
    const createUser = await axios.post(API, newUser)
    return createUser;
};

const removeUser = async (id) => {
    const deleteUser = await axios.delete(`${API}/${id}`);
    return deleteUser;
};

const getWeather = async () => {
    const weather = await axios.get(WEATHER_API);
    return weather;
}

export {
    getUsers, 
    createUsers,
    removeUser,
    getWeather
}