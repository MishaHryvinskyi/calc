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
                  <td>{id}</td>
                  <td>{userName}</td>
                  <td>{number}</td>
                  <td>{lenses}</td>
                  <td>{separiteValue[0]}</td>
                  <td>{separiteValue[1] || 0} грн</td>
                  <td>{lensesOD || 0} грн</td>
                  <td>{lensesOS || 0} грн</td>
                  <td>{job || 0} грн</td>
                  <td>{ton || 0} грн</td>
                  <td>{comment || " "}</td>
                  <td>{totalPrice} грн</td>
                  <td>{date}</td>
                </tr>
              );
            }
          )}
        </tbody>
      );
}

export default Tbody;