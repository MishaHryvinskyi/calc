import Table from "components/Table/Table";
import { getUsers } from "API/api";
import Title from "components/Title/Title";
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
            <Title text={'Список користувачів'}/>
            <Table users={users}/>
        </>
    );
}

export default Orders;