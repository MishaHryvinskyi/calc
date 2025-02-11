import { lensenPriceItalia, lensenPriceLitva } from "DB/data";
import { ContainerPrice } from "./LensesPrice.styled";
import LinsesList from "components/LinsesList/LinsesList";

const LensesPrice = () => {
    return (
        <ContainerPrice>
            <LinsesList dataPrice={lensenPriceLitva} title="Литва" />
            <LinsesList dataPrice={lensenPriceItalia} title="Італія" />
        </ContainerPrice>
    )
}

export default LensesPrice;