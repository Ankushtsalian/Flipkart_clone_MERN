import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Home from "./Pages/Home";
import VerifyEmail from "./Components/VerifyEmail";
import ResetPassword from "./Components/ResetPassword";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="Product" element={<Product />} />
            <Route path="/user/verify-email" element={<VerifyEmail />} />
            <Route path="/user/reset-password" element={<ResetPassword />} />
          </Route>

          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
