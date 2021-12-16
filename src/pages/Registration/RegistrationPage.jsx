import React from "react";
import './RgistrationPage.css'
import HeadLogo from "../../logoVariant/HeadLogo";
import RegistrationForm from "../../components/registrationForm/RegistrationForm";

const RegistrationPage = () => {
  return (
    <div className="registration-page">
      <div className="registration-logo">
         <HeadLogo></HeadLogo>
      </div>
      <div className="registration-map">
        <RegistrationForm></RegistrationForm>
      </div>
    </div>
  )
}

export default RegistrationPage