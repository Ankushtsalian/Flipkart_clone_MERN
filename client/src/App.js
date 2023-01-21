import "./App.css";
import styled from "styled-components";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Home from "./Pages/Home";

function App() {
  return (
    <div
      style={{
        minWidth: "100%",
        // position: "relative",
        // top: "57px",
        // bottom: "57px",
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="Product" element={<Product />} />
          </Route>
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </Router>{" "}
    </div>
  );
}

export default App;
