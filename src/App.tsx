import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Shopping from "./pages/Shopping";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NaBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shopping' element={<Shopping/>}/>
        <Route path='/favorites' element={<Favorites/>} />
      </Routes>
    </div>
  );
}

export default App;
