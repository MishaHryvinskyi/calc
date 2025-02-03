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
          job,
          ton = 0,
          comment,
          date,
          urgency
        }) => {
          const lensesPow = Number(lenses) + Number(lenses);
          const separiteValue = rimPrice.split(" ");
          const totalPrice =
            Number(separiteValue[1] || 0) +
            Number(lensesPow) +
            Number(job) +
            Number(ton);
            
          return (
            <tr key={id}>
              <Td iSurgency={urgency}>{id}</Td>
              <Td iSurgency={urgency}>{userName}</Td>
              <Td iSurgency={urgency}>{number}</Td>
              <Td iSurgency={urgency}>{separiteValue[0]}</Td>
              <Td iSurgency={urgency}>{separiteValue[1]} грн</Td>
              <Td iSurgency={urgency}>{lenses} грн/шт</Td>
              <Td iSurgency={urgency}>{job || 0} грн</Td>
              <Td iSurgency={urgency}>{ton || 0} грн</Td>
              <Td iSurgency={urgency}>{comment || " "}</Td>
              <Td iSurgency={urgency}>{totalPrice} грн</Td>
              <Td iSurgency={urgency}>{date}</Td>
            </tr>
          );
        }
      )}
    </tbody>
  );
};

export default Tbody;