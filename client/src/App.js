import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import VerifyEmail from "./Components/VerifyEmail";
import ResetPassword from "./Components/ResetPassword";

import AdminProtected from "./Pages/AdminProtected";
import AdminProduct from "./Pages/AdminProduct";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="Admin" element={<AdminProtected />}>
              <Route path="Product" element={<AdminProduct />} />
            </Route>
            <Route index element={<Home />} />
            <Route path="Product" element={<Product />} />
            <Route path="/user/reset-password" element={<ResetPassword />} />
            <Route path="/user/verify-email" element={<VerifyEmail />} />
          </Route>

          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
