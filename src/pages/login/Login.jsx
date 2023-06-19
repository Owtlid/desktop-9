import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import authService from "../../services/authServices";
import "./Login.style.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "levan.lashauri1@gmail.com",
    password: "Demo_1234",
  });

  const token = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  useEffect(() => {
    if (token && refreshToken) {
      authService.refreshToken(token, refreshToken).then(() => {
        navigate("/");
      });
    }
  }, []);

  const handleLoginClick = () => {
    authService
      .loginUser(userData?.email, userData?.password)
      .then((res) => {
        if (res?.Success) {
          localStorage.setItem("accessToken", res?.AccessToken);
          localStorage.setItem("refreshToken", res?.RefreshToken);
          navigate("/");
        } else {
          toast.error(res?.Message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="loginPageWrapper">
      <div className="loginCard">
        <h3 className="loginTitle">Login</h3>

        <div className="inputsWrapper">
          <input
            className="input"
            disabled
            value={userData?.email}
            type="email"
          />
          <input
            className="input"
            disabled
            value={userData?.password}
            type="password"
          />
        </div>

        <button className="loginButton" onClick={handleLoginClick}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
