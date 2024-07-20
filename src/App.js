import React from 'react';
import { Link, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Home from "./routes/Home";
import "./index.css";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};

export default App;
