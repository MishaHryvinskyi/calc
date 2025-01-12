import Tbody from "../Tbody/Tbody";
import { Th, Thead, TableStyled } from "./Table.styled";
const Table = ({ users, loading }) => {
    return (
        <TableStyled>
        <Thead>
            <tr>
              <Th>№</Th>
              <Th>Замовник</Th>
              <Th>Телефон</Th>
              <Th>Виробник лiнзи</Th>
              <Th>Назва оправи</Th>
              <Th>Ціна оправи</Th>
              <Th>Ціна OD</Th>
              <Th>Ціна OS</Th>
              <Th>Робота техніка</Th>
              <Th>Тонування</Th>
              <Th>Коментар</Th>
              <Th>Загальна вартість</Th>
              <Th>Створено</Th>
            </tr>
        </Thead>
        <Tbody users={users} loading={loading}/>
      </TableStyled>
    );
}

export default Table;