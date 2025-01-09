import { getUsers } from "API/api";
import { useEffect, useState } from "react";

import Table from "./Table/Table";

const App = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers(); // Виклик API для отримання даних
        setUsers(data); // Оновлюємо стан
      } catch (error) {
        console.error("Помилка завантаження користувачів:", error); // Лог помилок
      }
    };

    fetchUsers();
  }, [])


  return (
    <div>
      <h1>Список користувачів</h1>
      <Table users={users} />
    </div>
  );
}

export default App;