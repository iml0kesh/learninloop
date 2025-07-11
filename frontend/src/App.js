import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Fixed typo: BrowerRouter -> BrowserRouter

import JavaDoc from "./pages/JavaDoc";
import HomeDoc from "./pages/HomeDoc";

const App = () => { // Fixed export syntax
  return (
    <Router>
      <Routes>
        <Route path="/learning/java" element={<JavaDoc />} />
        <Route path="/" element={<HomeDoc />} />
      </Routes>
    </Router>
  );
};

export default App; // Moved export to bottom