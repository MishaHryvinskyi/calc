import Table from "components/App/Table/Table";
import { getUsers } from "API/api";
import { useEffect, useState } from "react";


const Orders = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers(); 
        setUsers(data);
      } catch (error) {
        console.error("Помилка завантаження користувачів:", error); 
      }
    };

    fetchUsers();
  }, [])

    return (
        <>
            <h1>Список користувачів</h1>
            <Table users={users}/>
        </>
    );
}

export default Orders;