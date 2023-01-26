import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useQuery } from "../Hooks/useQuery";
import { MainContainer } from "../Styles/Navbar";

const VerifyEmail = () => {
  const [error, setError] = useState(0);
  const [loading, setLoading] = useState(false);
  const query = useQuery();

  const verifyToken = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("http://localhost:5000/verify-email", {
        verificationToken: query.get("token"),
        email: query.get("email"),
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);

      alert(error.response.data.msg);
      setError(error.response.status);
    }
  };

  useEffect(() => {
    if (!error) verifyToken();
  }, []);

  if (loading)
    return <MainContainer className="page">LOADING... </MainContainer>;

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
      <h2>Account Confirmed</h2>
      <Link to="/" className="btn">
        Please login
      </Link>
    </MainContainer>
  );
};

export default VerifyEmail;
