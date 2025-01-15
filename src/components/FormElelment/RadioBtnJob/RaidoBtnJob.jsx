import { FilesedRadio, InputRadio } from './RadioBtnJob.styled.jsx';
import { arrJob } from "DB/data";

const RadioBtnJob = ({ radioCheck, selectedJob }) => {
    return(
        <FilesedRadio>
        <legend>Оплата роботи</legend>
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
                    onChange={radioCheck}
                />
                {text}
            </label>) }
        </FilesedRadio>
    )
};

export default RadioBtnJob;