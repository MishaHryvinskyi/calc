import { FieldsetStyled } from "components/Form/Form.styled";
import { FaGlasses } from "react-icons/fa";
import { arrRim } from "DB/data";

const SelectRim = ({ checkRim, selectedRim }) => {
    return (
        <FieldsetStyled>
            <legend><FaGlasses /> Оправи</legend>
                <select 
                    value={selectedRim} 
                    onChange={checkRim}
                    name="rim"
                >
                    <option value='default' disabled>Виберіть оправу</option>
                        {arrRim.map((item) => (
                            <option key={item} value={item}>
                                {item} грн
                            </option>
                        ))}
                </select>
        </FieldsetStyled>
    )
};

export default SelectRim;