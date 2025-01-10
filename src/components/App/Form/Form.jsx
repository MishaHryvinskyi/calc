import { arrJob, arrRim } from "DB/data";
import { useState } from "react";

const Form = () => {
const [userName, setUserName] = useState('');
const [userNumber, setUserNumber] = useState('');
const [selectedRim, setSelectedRim] = useState('Власна оправа 0');
const [lenses, setLenses] = useState('');
const [od, setOd] = useState('');
const [os, setOs] = useState('');

function onSubmit(e) {
    e.preventDefault();
    console.log({ 
        user: userName, 
        number: userNumber, 
        userRim: selectedRim, 
        lenses: lenses,
        od: od,
        os: os,

    });
}

    return (
        <form onSubmit={onSubmit}>
            <label>
            Замовник
                <input 
                    required 
                    name="userName" 
                    type="text" 
                    placeholder="Прізвище та ім'я"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </label>
            <label>
                Номер телефону
                <input 
                    required 
                    name="number"
                    type="tel" 
                    placeholder="Телефон"
                    value={userNumber}
                    onChange={(e) => setUserNumber(e.target.value)}
                    pattern="\d{10}" 
                />
            </label>
            
            <fieldset>
                <legend>Оправи</legend>
                <select 
                    value={selectedRim} 
                    onChange={(e) => setSelectedRim(e.target.value)}
                >
                    {arrRim.map((item) => (
                        <option key={item} value={item}>
                            {item} грн
                        </option>
                    ))}
                </select>
            </fieldset>

            <label>
                Лінзи
                <input 
                    value={lenses}
                    name="lenses" 
                    type="text" 
                    placeholder="Виробник і специфікація"
                    onChange={(e) => setLenses(e.target.value)}
                />
            </label>

            <label>
                OD
                <input 
                    type="number" 
                    placeholder="ціна-OD"
                    name="OD"
                    value={od}
                    onChange={(e) => setOd(e.target.value)}
                />
            </label>

            <label>
                OS
                <input 
                    type="number" 
                    placeholder="ціна-OS"
                    value={os}
                    onChange={(e) => setOs(e.target.value)}
                />
            </label>
            
            <fieldset>
                { arrJob.map(({ id, price, text }) => 
                <label 
                    key={id} 
                    htmlFor={id}
                >
                    <input 
                        key={id} 
                        id={id} 
                        type="radio" 
                        value={price}
                    />{text}
                </label>) }
            </fieldset>
            
            <fieldset>
                <label>
                    <input 
                        type="checkbox" 
                        name="ton" 
                        value="250"
                    /> Тонування
                </label>

                <label>
                <input 
                    type="checkbox"
                    name="urgency" 
                    value="orange"
                /> Терміновість
                </label>
            </fieldset>

            <label>
                Коментар
                <textarea placeholder="коментар"></textarea>
            </label>

            <button type="submit">Створити</button>
        </form>
    )
};

export default Form;