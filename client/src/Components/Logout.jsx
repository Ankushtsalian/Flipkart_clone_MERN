import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../Redux/Auth-Store/Auth-Slice";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <div>
      <svg
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        strokeWidth="6"
        stroke="var(--color-brand-blue)"
        fontWeight="bolder"
        fill="var(--color-brand-blue)"
        width="30.055px"
        height="10.88px"
        viewBox="0 0 113.055 122.88"
        enableBackground="new 0 0 113.055 122.88"
      >
        <g>
          <path d="M53.114,2.457C53.114,1.1,54.643,0,56.527,0s3.413,1.1,3.413,2.457v44.377c0,1.357-1.528,2.457-3.413,2.457 s-3.413-1.1-3.413-2.457V2.457L53.114,2.457z M73.615,19.661c-1.768-0.648-2.675-2.605-2.026-4.373 c0.647-1.767,2.604-2.674,4.372-2.026c10.962,4.015,20.339,11.339,26.924,20.766c6.409,9.174,10.17,20.32,10.17,32.325 c0,15.606-6.329,29.738-16.559,39.969c-10.23,10.229-24.362,16.559-39.969,16.559s-29.739-6.329-39.969-16.559 C6.329,96.091,0,81.959,0,66.353c0-12.005,3.76-23.151,10.169-32.325c6.585-9.427,15.962-16.751,26.924-20.766 c1.767-0.647,3.725,0.26,4.372,2.026c0.648,1.767-0.259,3.725-2.026,4.373c-9.659,3.538-17.913,9.978-23.698,18.259 c-5.619,8.044-8.916,17.846-8.916,28.433c0,13.723,5.564,26.148,14.559,35.143c8.995,8.995,21.42,14.56,35.143,14.56 s26.148-5.564,35.143-14.56c8.995-8.994,14.559-21.42,14.559-35.143c0-10.587-3.297-20.389-8.916-28.433 C91.527,29.638,83.274,23.198,73.615,19.661L73.615,19.661z" />
        </g>
      </svg>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
