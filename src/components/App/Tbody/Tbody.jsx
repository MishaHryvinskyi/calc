import { Td } from "./Tbody.styled";

const Tbody = ({ users }) => {

    return (
        <tbody>
          {users.map(
            ({
              id,
              userName,
              number,
              lenses,
              rimPrice = "0 грн",
              lensesOD = 0,
              lensesOS = 0,
              job = 0,
              ton = 0,
              comment,
              date,
            }) => {
              const separiteValue = rimPrice.split(" ");
              const totalPrice =
                Number(separiteValue[1] || 0) + Number(lensesOD) + Number(lensesOS) + Number(job) + Number(ton);
    
              return (
                <tr key={id}>
                  <Td>{id}</Td>
                  <Td>{userName}</Td>
                  <Td>{number}</Td>
                  <Td>{lenses}</Td>
                  <Td>{separiteValue[0]}</Td>
                  <Td>{separiteValue[1] || 0} грн</Td>
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
}

export default Tbody;