import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useQuery } from "../Hooks/useQuery";
import { MainContainer } from "../Styles/Navbar";

const ResetPassword = () => {
  const [error, setError] = useState(0);
  const [password, setPassword] = useState("");
  const query = useQuery();

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

  //   useEffect(() => {
  //     verifyToken();
  //   }, []);

  if (error && error !== 400) {
    return (
      <MainContainer className="page">
        {/* <h4>There was an error, please double check your Reset link </h4> */}
        <Navigate to="/" />
      </MainContainer>
    );
  }
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
