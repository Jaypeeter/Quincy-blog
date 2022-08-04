import logo from './logo.svg';
import './App.css';
import {  Routes, Route, Router, BrowserRouter  } from 'react-router-dom';
import Home from './Test route/Home';
import About from './Test route/About';

//import Contact from './Test route/Contact';
//<Route path="/contact" element={<Contact darkMode={darkMode} toggle={toggleMode}/>}></Route>

import Contact from './Test route/Contact';
import Error from './Test route/Error';
import Settings from './Test route/Settings';
import SearchView from './Test route/SearchView';
import React from 'react';


const ReactRouterSetup = () => {
  const[darkMode, setDarkMode] = React.useState(false)
  const [searchText, setSearchText] = React.useState([])

  
  




  return (
    <BrowserRouter>

      


    <Routes>
        <Route exact path="/" element={<Home darkMode={darkMode} searchText={searchText} setSearchText={setSearchText}/>}></Route>
        <Route path="/about" element={<About darkMode={darkMode} />}></Route>
        <Route path="/contact" element={<Contact darkMode={darkMode} />}></Route>
        <Route path="/settings" element={<Settings darkMode={darkMode} setDarkMode={setDarkMode} />}></Route>
        <Route path="/searchView" element={<SearchView searchText={searchText} darkMode={darkMode}/>}></Route>
        <Route path="/*" element={<Error/>}></Route>

    </Routes>
    </BrowserRouter>

      );
}

export default ReactRouterSetup;
