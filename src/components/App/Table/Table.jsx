import Tbody from "../Tbody/Tbody";

const Table = ({ users }) => {
    return (
        <table>
        <thead>
            <tr>
              <th>№</th>
              <th>Замовник</th>
              <th>Телефон</th>
              <th>Виробник лiнзи</th>
              <th>Назва оправи</th>
              <th>Ціна оправи</th>
              <th>Ціна OD</th>
              <th>Ціна OS</th>
              <th>Робота техніка</th>
              <th>Тонування</th>
              <th>Коментар</th>
              <th>Загальна вартість</th>
              <th>Створено</th>
            </tr>
        </thead>
        <Tbody users={users}/>
      </table>
    );
}

export default Table;