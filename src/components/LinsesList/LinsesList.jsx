import { ContainerLenses } from "./LinsesList.styled";

const LinsesList = ({ title, dataPrice }) => {
    return (
        <ContainerLenses>
            <h2>{title}</h2>
            <ul>
                {dataPrice.map(({ price, lensenName }) =>
                    <li>
                        <p>Індекс лінзи {lensenName}</p>
                        <h3>Ціна за штуку <span>{price}</span> грн</h3>
                    </li>
                )}
            </ul>
        </ContainerLenses>
    )
};

export default LinsesList;