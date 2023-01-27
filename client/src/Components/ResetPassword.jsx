import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useQuery } from "../Hooks/useQuery";
import { MainContainer } from "../Styles/Navbar";

const ResetPassword = () => {
  const [error, setError] = useState(0);
  const [password, setPassword] = useState("");
  const query = useQuery();
  const navigate = useNavigate();

  const verifyToken = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/reset-password",
        {
          token: query.get("token"),
          email: query.get("email"),
          password,
        }
      );
      alert(data + "  PLEASE LOGIN WITH NEW PASSWORD");
    } catch (error) {
      alert(error.response.data.msg);

      setError(error.response.status);
    }
  };

  useEffect(() => {
    verifyToken();
  }, []);

  useEffect(() => {
    verifyToken();
    if (error || error !== 400) navigate("/");
  }, [error]);

  return (
    <MainContainer>
      {/* <h2>Account Confirmed</h2>
      <Link to="/" className="btn">
        Please login
      </Link> */}
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={verifyToken}>Reset</button>
    </MainContainer>
  );
};

export default ResetPassword;
