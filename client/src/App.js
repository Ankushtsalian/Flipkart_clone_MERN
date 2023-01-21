import "./App.css";
import styled from "styled-components";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="Product" element={<Product />} />
          </Route>
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
