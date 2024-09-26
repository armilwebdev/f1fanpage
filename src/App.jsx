// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import F1Results from "./components/F1Results";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Drivers from "./pages/Drivers";
import Constructors from "./pages/Constructors";

import './index.css';

const App = () => {
  return (
    <Router>
    <div className="m-0 p-0 ">
        <Navbar />
        <main className="h-full w-full">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/constructors" element={<Constructors />} />
        </Routes>
        </main>
    </div>
    </Router>
  );
};

export default App;
