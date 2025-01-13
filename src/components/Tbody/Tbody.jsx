import { Td } from "./Tbody.styled";
import Loader from "components/Loader/Loader";

const Tbody = ({ users }) => {
  
  if (!users || users.length === 0) {
    // Якщо users ще не завантажені або порожні
    return (
      <tbody><tr><td><Loader /></td></tr></tbody>
    );
  }

  return (
    <tbody>
      {users.map(
        ({
          id,
          userName,
          number,
          lenses,
          rimPrice,
          lensesOD = 0,
          lensesOS = 0,
          job = 0,
          ton = 0,
          comment,
          date,
        }) => {
          const separiteValue = rimPrice.split(" ");
          const totalPrice =
            Number(separiteValue[1] || 0) +
            Number(lensesOD) +
            Number(lensesOS) +
            Number(job) +
            Number(ton);

          return (
            <tr key={id}>
              <Td>{id}</Td>
              <Td>{userName}</Td>
              <Td>{number}</Td>
              <Td>{lenses}</Td>
              <Td>{separiteValue[0]}</Td>
              <Td>{separiteValue[1]} грн</Td>
              <Td>{lensesOD || 0} грн</Td>
              <Td>{lensesOS || 0} грн</Td>
              <Td>{job || 0} грн</Td>
              <Td>{ton || 0} грн</Td>
              <Td>{comment || " "}</Td>
              <Td>{totalPrice} грн</Td>
              <Td>{date}</Td>
            </tr>
          );
        }
      )}
    </tbody>
  );
};

export default Tbody;