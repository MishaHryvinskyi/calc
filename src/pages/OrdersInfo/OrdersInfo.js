import { getUsers, removeUser } from "API/api";
import Info from "components/Info";
import { useEffect, useState } from "react";

const OrdersInfo = () => {
    const [users, setUsers] = useState([]);
    const [openId, setOpenId] = useState(null);

    useEffect(() => {
       const fetchUsers = async () => {
        try {
            const allUser = await getUsers();
            setUsers(allUser.data);
        } catch (err) {
            console.log(err);
        }
       };

       fetchUsers();
    }, []);

    const handleDelete = (removedId) => {
        removeUser(removedId);
        setUsers((prevUsers) => prevUsers.filter(({ id }) => id !== removedId));
    };

    const toggleShow = (id) => {
        setOpenId((prevId) => (prevId === id ? null : id));
    }
    return (
        <Info 
            allUser={users} 
            openId={openId} 
            toggleShow={toggleShow}
            remove={handleDelete}
        />
    )
}

export default OrdersInfo;