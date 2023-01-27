import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useQuery } from "../Hooks/useQuery";
import { MainContainer } from "../Styles/Navbar";

const VerifyEmail = () => {
  const [error, setError] = useState(0);
  const [loading, setLoading] = useState(false);
  const query = useQuery();
  const navigate = useNavigate();

  const verifyToken = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("http://localhost:5000/verify-email", {
        verificationToken: query.get("token"),
        email: query.get("email"),
      });
      setLoading(false);
    } catch (error) {
      console.log(error.message);

      setError(error.response.status);
    }
  };
  console.log(error);
  useEffect(() => {
    if (!error) verifyToken();
  }, []);

  useEffect(() => {
    if (error || error !== 400) {
      alert(error.response.data.msg || error.message);
      navigate("/");
    }
  }, [error]);

  if (loading)
    return <MainContainer className="page">LOADING... </MainContainer>;

  if (error || error !== 400) {
    return (
      <MainContainer className="page">
        {/* <h4>There was an error, please double check your Reset link </h4> */}
        <Navigate to="/" />
      </MainContainer>
    );
  }
  return (
    <MainContainer>
      <h2>Account Confirmed</h2>
      <Link to="/" className="btn">
        Please login
      </Link>
    </MainContainer>
  );
};

export default VerifyEmail;
