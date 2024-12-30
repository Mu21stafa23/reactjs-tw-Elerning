import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from '../../Components/Navbar/Nav'; 
import Hero from '../../Components/Hero/Hero';
import HeaderAb from '../../Components/Header ABout/HeaderAb';
import Prog from '../../Components/Progrram/Prog';
import StatceAp from '../../Components/Statce about us/StatceAp';
import Fet from '../../Components/featcher/Fet';
import Componey from '../../Components/TrustComponey/Componey';
import Fotter from '../../Components/Fotter/fotter';
import LoginPage from '../../Components/LoginPage/LoginPage'



const HomePage = () => {
  return (
    <div>
       <>
          
            <Nav />  
            <Hero/>
            <HeaderAb/>
            <Prog/>
            <StatceAp/>
            <Fet/>
            <Componey/>
           <Fotter/>
          
               </>
    </div>
  )
}

export default HomePage
