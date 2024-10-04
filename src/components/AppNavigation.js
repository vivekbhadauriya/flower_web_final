import React from "react";
import ProductList from "./ProductList";
import HomePage from "../page/HomePage";
import { Route, Routes } from "react-router-dom";
import "./AppCss.css";
// import Birthdaypage from '../page/Birthdaypage'
import RomanceLovePage from "../page/RomanceLovePage";
import AboutPage from "../page/AboutPage";
import MorePage from "../page/MorePage";
// import Dashboard from './pages/Dashboard'; // Create a Dashboard

const AppNavigation = () => {
  return (
    <h1>AppNavigation</h1>
    // <div>
    //     <Routes>
    //         <Route path="/home" element={<HomePage/>} />
    //         <Route path="/productlist" element={<ProductList />} />
    //         {/* <Route path='/birthday' element={<Birthdaypage/>} /> */}
    //         <Route path='/about' element={<AboutPage />} />
    //         <Route path='/more' element={<MorePage />} />
    //         <Route path='/romance-love' element={<RomanceLovePage/>} />
    //         {/* <Route path="/dashboard" element={<Dashboard />} /> */}
    //     </Routes>
    // </div>
  );
};

export default AppNavigation;
