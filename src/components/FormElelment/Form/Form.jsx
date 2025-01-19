import { useState } from "react";
import { createUsers } from "API/api";
import Input from "components/FormElelment/Input/Input";
import SelectRim from "components/FormElelment/SelectRim/SelectRim";
import LensesSelected from "../LensesSelected/LensesSelected";
import RadioBtnJob from "components/FormElelment/RadioBtnJob/RaidoBtnJob";
import CheckBox from "components/FormElelment/CheckBox/CheckBox";
import { FormStyled, LabelStyled, TextAreaStyled, BtnStyled } from "./Form.styled";
import { FaCommentDots } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

const Form = () => {
const [userName, setUserName] = useState('');
const [userNumber, setUserNumber] = useState('');
const [selectedRim, setSelectedRim] = useState('default');
const [lenses, setLenses] = useState('');
const [comment, setComment] = useState('');
const [selectedJob, setSelectedJob] = useState('');
const [ton, setTon] = useState(false);
const [varn, setVarn] = useState(false);

const handleClick = (e) => {

    switch(e.target.name) {
        case "userName" :
        setUserName(e.target.value);
        break;

        case "number" :
        setUserNumber(e.target.value);
        break;

        case "lenses" :
        setLenses(e.target.value);
        break;

        case "job" :
        setSelectedJob(e.target.value);
        break;

        case "rim" :
        setSelectedRim(e.target.value);
        break;

        case "ton" :
        setTon(e.target.value);
        break;

        case "urgency" :
        setVarn(e.target.value);
        break;

        case "commentar":
        setComment(e.target.value);
        break;
        
        default :
        return
    }
}

const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
        userName: userName,
        number: userNumber,
        rimPrice: selectedRim,
        lenses: lenses,
        comment: comment,
        job: selectedJob,
        ton: ton,
        urgency: varn,
        date: new Date().toISOString(), 
    };

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
            <Input
                text="Замовник" 
                userName={userName}
                handleClick={handleClick}
                name="userName"
                pattern="^[A-Za-zА-Яа-яЇїІіЄєҐґ'’\- ]+$"
                placeholder="Прізвище та ім'я"
                type="text" 
            />
            <Input
                text="Номер телефону" 
                userNumber={userNumber}
                handleClick={handleClick}
                name="number"
                pattern="\d{10}"
                placeholder="Телефон"
                type="tel" 
            />
            
            <SelectRim checkRim={handleClick} selectedRim={selectedRim}/>
            
            <LensesSelected checkLens={handleClick} lenses={lenses}/>

            <RadioBtnJob  selectedJob={selectedJob} radioCheck={handleClick} />

            <CheckBox 
                checkTon={handleClick} 
                ton={ton}
                checkVarn={handleClick}
                varn={varn}
            />
            
            <LabelStyled>
            <FaCommentDots />Коментар
                <TextAreaStyled 
                    name="commentar"
                    placeholder="коментар"
                    value={comment}
                    onChange={handleClick}
                ></TextAreaStyled>
            </LabelStyled>

            <BtnStyled type="submit">Створити</BtnStyled>
            <ToastContainer />
        </FormStyled>
    )
};

export default Form;