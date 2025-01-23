const MoreInfo = () => {
    return (
        <div>
            <p>Ціна за лінзи: {lenses} грн/шт</p>
            <p>Оправа: {rimPrice} грн</p>
            <p>Оплата роботи: {job} грн</p>
            {ton ? <p>Тонування</p> : false}
            {comment ? <p>Коментар: {comment}</p> : false}
            <p>Час створення: {date}</p>
        </div>
    )
};

export default MoreInfo;