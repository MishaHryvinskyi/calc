import { FilesedCheckBox } from "./CheckBox.styled";
import { IoGlasses } from "react-icons/io5";
import { TbUrgent } from "react-icons/tb";

const CheckBox = ({ checkTon, checkVarn, ton, varn }) => {
    return (
        <FilesedCheckBox>
            <legend>Додаткові опції</legend>
                <label>
                    <input 
                        type="checkbox" 
                        name="ton" 
                        value="250"
                        checked={ton}
                        onChange={checkTon}
                    /> Тонування <IoGlasses/>
                </label>
            
                <label>
                    <input 
                         type="checkbox"
                         name="urgency" 
                         value="orange"
                         checked={varn}
                         onChange={checkVarn}
                    /> Терміновість <TbUrgent/>
                </label>
        </FilesedCheckBox>
    )
};

export default CheckBox;