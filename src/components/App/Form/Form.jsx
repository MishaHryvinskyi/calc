import { arrJob, arrRim } from "DB/data";
import { useState } from "react";
import { createUsers } from "API/api";

const Form = () => {
const [userName, setUserName] = useState('');
const [userNumber, setUserNumber] = useState('');
const [selectedRim, setSelectedRim] = useState('Власна оправа 0');
const [lenses, setLenses] = useState('');
const [od, setOd] = useState('');
const [os, setOs] = useState('');
const [comment, setComment] = useState('');
const [selectedJob, setSelectedJob] = useState('');
const [ton, setTon] = useState(false);
const [varn, setVarn] = useState(false);


const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
        userName: userName,
        number: userNumber,
        rimPrice: selectedRim,
        lenses: lenses,
        lensesOD: od,
        lensesOS: os,
        comment: comment,
        job: selectedJob,
        ton: ton,
        urgency: varn,
        date: new Date().toISOString(), // Додаємо дату створення
    };

    try {
        const response = await createUsers(data); // Виклик API
        console.log("Успішно створено користувача:", response);
    } catch (error) {
        console.error("Помилка:", error.message);
    }
};

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
                        id={id} 
                        name="job"
                        type="radio" 
                        value={price}
                        checked={selectedJob === price}
                        onChange={(e) => setSelectedJob(e.target.value)}
                    />{text}
                </label>) }
            </fieldset>
            
            <fieldset>
                <label>
                    <input 
                        type="checkbox" 
                        name="ton" 
                        value="250"
                        checked={ton}
                        onChange={(e) => setTon(e.target.checked)}
                    /> Тонування
                </label>

                <label>
                <input 
                    type="checkbox"
                    name="urgency" 
                    value="orange"
                    checked={varn}
                    onChange={(e) => setVarn(e.target.checked)}
                /> Терміновість
                </label>
            </fieldset>

            <label>
                Коментар
                <textarea 
                    placeholder="коментар"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
            </label>

            <button type="submit">Створити</button>
        </form>
    )
};

export default Form;