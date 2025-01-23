import { Route, Routes } from "react-router-dom";

import Layout from "../Layout/Layout";
import Home from "pages/Home/Home";
import Order from "pages/Order";
import Orders from "pages/Orders";
import OrdersInfo from "pages/OrdersInfo/OrdersInfo";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="info" element={<OrdersInfo/>}/>
      </Route>
    </Routes>
  );
}

export default App;