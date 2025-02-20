import {
    litva1_49,
    litva1_56,
    litva1_56PHOTO,
    litva1_56BlueBlock,
    litva1_61,
    litva1_67
} from '../../DB/litva';
import { 
    leansesItali1_50,
    leansesItali1_56,
    leansesItali1_56Photo,
    leansesItali1_60,
    leansesItali1_60BlueBlock,
    leansesItali1_67 
} from '../../DB/itali'
import { ContainerPrice, MainContainer } from "./LensesPrice.styled";
import LinsesList from "components/LinsesList/LinsesList";

const LensesPrice = () => {
    return (
    <MainContainer>
        <ContainerPrice>
            <h2>Литва</h2>
            <LinsesList dataPrice={litva1_49} title="Литва" titleIdx={'1.49'} />
            <LinsesList dataPrice={litva1_56} title="Литва" titleIdx={'1.56'}/>
            <LinsesList dataPrice={litva1_56PHOTO} title="Литва" titleIdx={'1.56Photo'}/>
            <LinsesList dataPrice={litva1_56BlueBlock} title="Литва" titleIdx={'1.56 Blue-block'} />
            <LinsesList dataPrice={litva1_61} title="Литва" titleIdx={'1.61'} />
            <LinsesList dataPrice={litva1_67} title="Литва" titleIdx={'1.67'} />
        </ContainerPrice>
         <ContainerPrice>
            <h2>Італія</h2>
            <LinsesList dataPrice={leansesItali1_50} title="Італія" titleIdx={'1.50'} />
            <LinsesList dataPrice={leansesItali1_56} title="Італія" titleIdx={'1.56'}/>
            <LinsesList dataPrice={leansesItali1_56Photo} title="Італія" titleIdx={'1.56Photo'}/>
            <LinsesList dataPrice={leansesItali1_60} title="Італія" titleIdx={'1.60'} />
            <LinsesList dataPrice={leansesItali1_60BlueBlock} title="Італія" titleIdx={'1.60BlueBlock'} />
            <LinsesList dataPrice={leansesItali1_67} title="Італія" titleIdx={'1.67'} />
        </ContainerPrice>
    </MainContainer>
    )
}

export default LensesPrice;