
import './App.css';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/home';
import ThirdComponent from './components/about';
import Parent from './components/Parent';
import Profile from './components/profile/Profile';
import Navbar from "./components/navbar"
import Footer from './components/footer';
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./components/todo"

import { useEffect, useState } from 'react';
import FinalTodo from './components/Final_todo';
function App() {


  return (
    <div className="App">
      <FinalTodo></FinalTodo>












      {/* <BrowserRouter>
        <Navbar></Navbar>

        <Routes>

          <Route path="/" element={<Home />} />


          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
        <Footer></Footer>
      </BrowserRouter> */}






    </div>
  );
}

export default App;
