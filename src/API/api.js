const API = 'https://6776676812a55a9a7d0b9792.mockapi.io/orders';

const WATHER_URL = 'https://api.weatherapi.com/v1';
const WATHER_API_KEY = 'c0dca8ed73ba444e8db231919241301';

const getUsers = () => {
    return fetch(API)
    .then(res => res.json())
}

const createUsers = (value) => {
    const options = {
        method: "POST",
        body: JSON.stringify(value),
        headers: {
            "Content-Type": "application/json",
        },
    }
    return fetch(API, options).then(res => res.json())
}

const removeUser = (id) => {
    const options = {
        method: "DELETE",
    }

    return fetch(`${API}/${id}`, options).then(res => res.json())
}

const getWeather = () => {
    return fetch(`${WATHER_URL}/forecast.json?key=${WATHER_API_KEY}&q=kosiv&days=1&lang=uk`)
    .then(response => {
        if(!response.ok) {
            throw new Error(response.statusText);
        }

        return response.json();
    })
}

export {
    getUsers, 
    createUsers,
    removeUser,
    getWeather
}