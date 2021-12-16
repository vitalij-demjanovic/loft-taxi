import React from "react";
import './LoginPage.css'
import HeadLogo from "../../logoVariant/HeadLogo";
import LoginForm from "../../components/loginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-logo">
         <HeadLogo></HeadLogo>
      </div>
      <div className="login-map">
        <LoginForm></LoginForm>
      </div>
    </div>
  )
}

export default LoginPage