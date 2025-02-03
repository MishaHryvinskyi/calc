import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getUsers, removeUser } from "API/api";
import Info from "components/Info";
import { InputSearch } from "./OrdersInfo.styled";

const OrdersInfo = () => {
    const [users, setUsers] = useState([]);
    const [openId, setOpenId] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const filterOrder = searchParams.get('order') ?? '';
    const visibleOrders = users.filter(user => user.userName.toLowerCase().includes(filterOrder.toLowerCase()));

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

    const updateQueryString = ({ target }) => target.value === '' 
        ? setSearchParams({}) 
        : setSearchParams({ order: target.value });

    const handleDelete = async (removedId) => {
        await removeUser(removedId);
        setUsers((prevUsers) => prevUsers.filter(({ id }) => id !== removedId));
    };

    const toggleShow = (id) => {
        setOpenId((prevId) => (prevId === id ? null : id));
    }
    return (
        <>
        <InputSearch 
            type="text" 
            value={filterOrder}
            onChange={updateQueryString} 
            placeholder="Пошук за іменем"
        />
        <Info 
            allUser={visibleOrders} 
            openId={openId} 
            toggleShow={toggleShow}
            remove={handleDelete}
        />
        </>
    );
};

export default OrdersInfo;