import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Header from "./commonents/header/Header";
import Footer from "./commonents/footer/Footer";
import Home from "./pages/Home";
import { productsData } from "./api/api";


const Layout =()=> {
  return(
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} loader={productsData} ></Route>
      </Route>
  ))
  return (
    <div className=" font-bodyFont overflow-x-hidden overflow-y-hidden bg-[#E3E6E6]">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
