import axios from "axios";

const API = 'https://6776676812a55a9a7d0b9792.mockapi.io/orders';
const WATHER_URL = 'https://api.weatherapi.com/v1';
const WATHER_API_KEY = 'c0dca8ed73ba444e8db231919241301';
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