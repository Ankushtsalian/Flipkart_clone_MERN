import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  if (error && error !== 400) return navigate("/");

  return (
    <MainContainer>
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={verifyToken}>Reset</button>
    </MainContainer>
  );
};

export default ResetPassword;
