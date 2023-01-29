import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "../Hooks/useQuery";
import { handleReset, verifyEmail } from "../Redux/Auth-Store/Auth-Slice";
import { MainContainer } from "../Styles/Navbar";
import Loader from "./Loader";

const VerifyEmail = () => {
  const { isLoading, errorStatusCode, emailVerified } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const query = useQuery();

  useEffect(() => {
    console.log("whY");
    if (
      !errorStatusCode &&
      !emailVerified &&
      query.get("token") &&
      query.get("email")
    ) {
      dispatch(
        verifyEmail({
          verificationToken: query.get("token"),
          email: query.get("email"),
        })
      );
    }
    if (errorStatusCode || !query.get("token") || !query.get("email")) {
      dispatch(handleReset());
      navigate("/LOGIN");
    }
  }, []);

  // useEffect(() => {
  //   if (errorStatusCode) {
  //     console.log({ errorStatusCode });
  //     dispatch(handleReset());
  //     navigate("/");
  //   }
  // }, [errorStatusCode]);

  if (isLoading) return <Loader />;

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
