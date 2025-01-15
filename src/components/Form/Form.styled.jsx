import styled from "@emotion/styled";

export const FormStyled = styled.form`
  margin: 100px auto;
  width: 1200px;
  padding: 50px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: rgb(211, 206, 206);
`;

export const LabelStyled = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  color: rgb(56, 50, 50);
`;

export const InputStyled = styled.input`
  cursor: pointer;
  border-radius: 4px;
  border: none;
  margin-top: 20px;
  font-size: 22px;
  width: 600px;
  padding: 10px 20px;
`;

export const FieldsetStyled = styled.fieldset`
    width: 600px;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;

    & legend {
        text-align: center;
        font-size: 24px;
        font-weight: bold;
    }

    & select {
        width: 600px;
        text-align: center;
        height: 40px;
        font-size: 24px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
`;

export const TextAreaStyled = styled.textarea`
  margin-top: 20px;
  font-size: 22px;
  border-radius: 4px;
  min-width: 600px;
  padding: 10px 20px;
  margin-bottom: 50px;
  border: none;
`;

export const BtnStyled = styled.button`
  font-size: 24px;
  font-weight: 800;
  cursor: pointer;
  border-radius: 30px;
  border: none;
  padding: 20px 30px;
  background-color: #35bcbf; 
  box-shadow: 0px 0px 86px -16px rgba(53,188,191,1);
  color: black;

  &:hover {
    box-shadow: 0px 0px 100px 2px rgba(144,246,215,1);
    border-radius: 50px;
    background-color: #90f6d7;  
    color: black;
  }
`;