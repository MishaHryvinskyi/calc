import { arrJob, arrRim } from "DB/data";
import { useState } from "react";
import { createUsers } from "API/api";
import { 
    FormStyled,
    InputStyled, 
    LabelStyled,
    TextAreaStyled,
    FieldsetStyled,
    FilesedRadio,
    InputRadio,
    FilesedCheckBox,
    BtnStyled
 } from "./Form.styled";
 import { 
    FaUser,
    FaPhoneAlt,
    FaGlasses,
    FaCommentDots,
    FaMoneyBillWave
 } from "react-icons/fa";
 import { GiSpectacleLenses } from "react-icons/gi";
 import { TbUrgent } from "react-icons/tb";
 import { IoGlasses } from "react-icons/io5";
 import { toast, ToastContainer } from "react-toastify";

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
        date: new Date().toISOString(), 
    };

    console.log(data)

    try {
        if (!selectedJob) {
            toast.warning('Виберіть оплату роботи');
            return;
        }
        const response = await createUsers(data); 
        console.log("Успішно створено користувача:", response);
    } catch (error) {
        console.error("Помилка:", error.message);
    }

    if (data) {
        toast.success(`Замовлення ${data.userName} успішно створено`);
        return;
    }
};

    return (
        <FormStyled onSubmit={onSubmit}>
            <LabelStyled>
            <FaUser/> Замовник
                <InputStyled 
                    required 
                    name="userName" 
                    type="text" 
                    placeholder="Прізвище та ім'я"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </LabelStyled>
            
            <LabelStyled>
            <FaPhoneAlt /> Номер телефону
                <InputStyled 
                    required 
                    name="number"
                    type="tel" 
                    placeholder="Телефон"
                    value={userNumber}
                    onChange={(e) => setUserNumber(e.target.value)}
                    pattern="\d{10}" 
                />
            </LabelStyled>
            
            <FieldsetStyled>
                <legend><FaGlasses /> Оправи</legend>
                <select 
                    value={selectedRim || "Власна-оправа 0"} 
                    onChange={(e) => setSelectedRim(e.target.value)}
                >
                    {arrRim.map((item) => (
                        <option key={item} value={item}>
                            {item} грн
                        </option>
                    ))}
                </select>
            </FieldsetStyled>

            <LabelStyled>
                <GiSpectacleLenses/>Лінзи
                <InputStyled 
                    value={lenses}
                    name="lenses" 
                    type="text" 
                    placeholder="Виробник і специфікація"
                    onChange={(e) => setLenses(e.target.value)}
                />
            </LabelStyled>

            <LabelStyled>
                OD
                <InputStyled 
                    type="number" 
                    placeholder="ціна-OD"
                    name="OD"
                    value={od}
                    onChange={(e) => setOd(e.target.value)}
                />
            </LabelStyled>

            <LabelStyled>
                OS
                <InputStyled 
                    type="number" 
                    placeholder="ціна-OS"
                    value={os}
                    onChange={(e) => setOs(e.target.value)}
                />
            </LabelStyled>
            
            <FilesedRadio>
                <legend><FaMoneyBillWave />Оплата роботи</legend>
                { arrJob.map(({ id, price, text }) => 
                <label 
                    key={id} 
                    htmlFor={id}
                >
                    <InputRadio  
                        id={id} 
                        name="job"
                        type="radio" 
                        value={price}
                        checked={selectedJob === price}
                        onChange={(e) => setSelectedJob(e.target.value)}
                    />
                    {text}
                </label>) }
            </FilesedRadio>
            <ToastContainer />
            <FilesedCheckBox>
                <legend>Додаткові опції</legend>
                <label>
                    <input 
                        type="checkbox" 
                        name="ton" 
                        value="250"
                        checked={ton}
                        onChange={(e) => setTon(e.target.value)}
                    /> Тонування <IoGlasses/>
                </label>

                <label>
                <input 
                    type="checkbox"
                    name="urgency" 
                    value="orange"
                    checked={varn}
                    onChange={(e) => setVarn(e.target.checked)}
                /> Терміновість <TbUrgent/>
                </label>
            </FilesedCheckBox>

            <LabelStyled>
            <FaCommentDots />Коментар
                <TextAreaStyled 
                    placeholder="коментар"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></TextAreaStyled>
            </LabelStyled>

            <BtnStyled type="submit">Створити</BtnStyled>
        </FormStyled>
    )
};

export default Form;