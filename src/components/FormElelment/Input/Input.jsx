import { InputStyled, LabelStyled } from "components/FormElelment/Form/Form.styled";

const Input = ({ 
    handleClick,
    placeholder,
    userName,
    pattern, 
    text, 
    name, 
    type, 
}) => {
    return (
        <LabelStyled>
            {text}
            <InputStyled 
                required 
                name={name} 
                placeholder={placeholder}
                value={userName}
                onChange={handleClick}
                pattern={pattern}
                type={type}
            />
        </LabelStyled>
    )
};

export default Input;