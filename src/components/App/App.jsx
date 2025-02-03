import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";

const Home = lazy(() => import("pages/Home/Home"));
const Order = lazy(() => import("pages/Order"));
const Orders = lazy(() => import("pages/Orders"));
const OrdersInfo = lazy(() => import("pages/OrdersInfo/OrdersInfo"));
const NotFound = lazy(() => import("pages/NotFound/NotFound"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="info" element={<OrdersInfo/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  );
}

export default App;