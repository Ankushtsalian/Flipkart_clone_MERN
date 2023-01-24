import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "../Hooks/useQuery";
import { MainContainer } from "../Styles/Navbar";

const VerifyEmail = () => {
  const [error, setError] = useState(false);
  const query = useQuery();
  const verifyToken = async () => {
    try {
      const { data } = await axios.post("http://localhost:5000/verify-email", {
        verificationToken: query.get("token"),
        email: query.get("email"),
      });
    } catch (error) {
      // console.log(error.response);
      setError(true);
    }
  };

  useEffect(() => {
    // if (!isLoading) {
    verifyToken();
    // }
  }, []);

  if (error) {
    return (
      <MainContainer className="page">
        <h4>There was an error, please double check your verification link </h4>
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
