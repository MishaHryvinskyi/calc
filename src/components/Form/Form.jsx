import { useState } from "react";
import { createUsers } from "API/api";
import RadioBtnJob from "components/RadioBtnJob/RaidoBtnJob";
import CheckBox from "components/CheckBox/CheckBox";
import SelectRim from "components/SelectRim/SelectRim";
import { 
    FormStyled,
    InputStyled, 
    LabelStyled,
    TextAreaStyled,
    BtnStyled
 } from "./Form.styled";
 import { 
    FaUser,
    FaPhoneAlt,
    FaCommentDots,
 } from "react-icons/fa";
 import { GiSpectacleLenses } from "react-icons/gi";
 import { toast, ToastContainer } from "react-toastify";

const Form = () => {
const [userName, setUserName] = useState('');
const [userNumber, setUserNumber] = useState('');
const [selectedRim, setSelectedRim] = useState('default');
const [lenses, setLenses] = useState('');
const [od, setOd] = useState('');
const [os, setOs] = useState('');
const [comment, setComment] = useState('');
const [selectedJob, setSelectedJob] = useState('');
const [ton, setTon] = useState(false);
const [varn, setVarn] = useState(false);

const radioCheck = (e) => setSelectedJob(e.target.value);
const checkTon = (e) => setTon(e.target.value);
const checkVarn = (e) => setVarn(e.target.checked);
const checkRim = (e) => setSelectedRim(e.target.value);

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
            
            <SelectRim checkRim={checkRim} selectedRim={selectedRim}/>
            
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
            {/* <fieldset>
                <legend>Індекс лінз</legend>
                <select>
        
                <optgroup label="Італія">
                {lensesItali.map(({ index, price }) => (
                        <option key={index} value={`${index} ${price}`}>{`${index} ${price} грн` }</option>
                    ))}
                </optgroup>
                <optgroup label="Литва">
                {lensesItali.map(({ index, price }) => (
                        <option key={index} value={`${index} ${price}`}>{`${index} ${price} грн` }</option>
                    ))}
                </optgroup>
                </select>
            </fieldset> */}

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
            
            <RadioBtnJob 
                selectedJob={selectedJob}
                radioCheck={radioCheck}
            />

            <CheckBox 
                checkTon={checkTon} 
                ton={ton}
                checkVarn={checkVarn}
                varn={varn}
            />
            
            <LabelStyled>
            <FaCommentDots />Коментар
                <TextAreaStyled 
                    placeholder="коментар"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></TextAreaStyled>
            </LabelStyled>

            <BtnStyled type="submit">Створити</BtnStyled>
            <ToastContainer />
        </FormStyled>
    )
};

export default Form;