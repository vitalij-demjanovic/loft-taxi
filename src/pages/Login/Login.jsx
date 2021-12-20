import React from "react";
import './Login.css'
import HeadLogo from '../../assets/image/HeadLogo.png'

const LoginPage = (props) => {
     return (
    <div className="login-page">
      <div className="login-logo">
         <img src={HeadLogo} alt="Logo" />
      </div>
      <div className="login">
        <div className="login-wrapper">
          <h2 className='login-wrapper-title'>Войти</h2>
          <form className='login-form'>
          <label className='login-form-email'>
            <span className='login-form-email_span'>Email</span>
            <input name="firstName" type="email" placeholder='mail@mail.ru'/>
          </label>
          <label className='login-form-password'>
            <span className='login-form-password_span'>Пароль</span>
            <input name="password" type="text" placeholder='*************'/>
          </label>
          <span className='login-form-span'>Забыли пароль?</span>
        </form>
        <button onClick={() => props.logIn('navigation')} className='login-wrapper-btn global-btn'>Войти</button>
        <div className="login-registration">
          <span className='login-registration-question'>Новый пользователь? </span>
          <span className='login-registration-link' onClick={() => props.navigation('registration')}>Регистрация</span>
        </div>
        </div>
        </div>
    </div>
  )
}
 

export default LoginPage