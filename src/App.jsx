// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import F1Results from "./components/F1Results";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Drivers from "./pages/Drivers";
import './index.css';

const App = () => {
  return (
    <Router>
    <div className="m-0">
        <Navbar />
        <main className="p-4">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/drivers" element={<Drivers />} />
        </Routes>
        </main>
    </div>
    </Router>
  );
};

export default App;
