import { lensenPriceLitva, lensenPriceItalia } from "DB/data";
import { FieldsetStyled } from "../Form/Form.styled";

const LensesSelected = ({ checkLens, lenses }) => {
    return (
        <FieldsetStyled>
            <legend>Лінзи</legend>
            <select 
            name="lenses"  
            onChange={checkLens}
            value={lenses}
            >
            <option 
                value='default' 
                disabled
            >Виберіть лінзи згідно рецепту
            </option>
                <optgroup label="Литва">
                    {lensenPriceLitva.map(({ lensenName, price }) => 
                        <option key={lensenName} value={price}>{`${lensenName} ${price}`} грн/шт</option>
                    )}
                </optgroup>
                <optgroup label="Італія">
                    {lensenPriceItalia.map(({ lensenName, price }) => 
                        <option key={lensenName} value={price}>{`${lensenName} ${price}`} грн/шт</option>
                    )}
                </optgroup>
            </select>
        </FieldsetStyled>
    );
}

export default LensesSelected;