import { Iten, Name, ContainerUser, ContainerInf, UserNumber, TotalPrice, BtnMore, Lenses, OrderNum } from "./Info.styled";
import { FiChevronDown } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const Info = ({ allUser, openId, toggleShow, remove }) => {
    return(
        <ul>
            {allUser.map(({ 
                id,
                job,
                lenses,
                number,
                rimPrice,
                ton,
                urgency,
                userName,
                comment,
                date 
            }) => {

                const lensesPow = Number(lenses) + Number(lenses);
                const separiteValue = rimPrice.split(" ");
                const totalPrice =
                    Number(separiteValue[1] || 0) +
                    Number(lensesPow) +
                    Number(job) +
                    Number(ton);

                return (
                    <Iten key={id}>
                        <ContainerUser>
                            <OrderNum>№ <span>{id}</span></OrderNum>
                            <Name>Замовник: <span>{userName}</span></Name>
                            <UserNumber>Номер телефону: <span>{number}</span></UserNumber>
                            <TotalPrice>Оплата замовлення: <span>{totalPrice}</span> грн</TotalPrice>
                            <BtnMore type="button" onClick={() => {remove(id)}}><MdDelete /></BtnMore>
                            <BtnMore onClick={() => toggleShow(id)}><FiChevronDown /></BtnMore>
                        </ContainerUser>
                        
                        {openId === id && (
                            <ContainerInf>
                                <Lenses>Ціна за лінзи: <span>{lenses}</span> грн/шт</Lenses>
                                <Lenses>Оправа: <span>{rimPrice}</span> грн</Lenses>
                                <Lenses>Оплата роботи: <span>{job}</span> грн</Lenses>
                                {ton ? <Lenses>Тонування: <span>{ton}</span> грн</Lenses> : false}
                                {comment ? <Lenses>Коментар: <span>{comment}</span></Lenses> : false}
                                {urgency ? <Lenses style={{backgroundColor: `${urgency}`}}>ТЕРМІНОВО!!!</Lenses> : null}
                                <Lenses>Час створення: <span>{date}</span></Lenses>
                            </ContainerInf>
                        )}
                    </Iten>
                )
            })}
        </ul>
    )
};

export default Info;