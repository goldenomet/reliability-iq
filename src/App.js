import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Ensure you have this Navbar component
import BlogPage from "./components/BlogPage"; // Ensure this BlogPage component exists

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} /> {/* Replace with actual Home */}
        <Route path="/blog" element={<BlogPage />} />
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
};

export default App;

