import { getUsers } from "API/api";
import Info from "components/Info";
import { useEffect, useState } from "react";

const OrdersInfo = () => {
    const [users, setUsers] = useState([]);
    const [openId, setOpenId] = useState(null);

    useEffect(() => {
       const fetchUsers = async () => {
        try {
            const data = await getUsers();
            setUsers(data);
        } catch (err) {
            console.log(err);
        }
       };

       fetchUsers();
    }, []);

    const toggleShow = (id) => {
        setOpenId((prevId) => (prevId === id ? null : id));
    }
    return (
        <Info 
            allUser={users} 
            openId={openId} 
            toggleShow={toggleShow}
        />
    )
}

export default OrdersInfo;