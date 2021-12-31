import React, {useContext} from "react";
import './Login.css'
import HeadLogo from '../../assets/image/HeadLogo.png'
import { logIn, AuthContext } from "../../auth/AuthContext";
import {Link} from "react-router-dom";

const LoginPage = () => {
    const { setIsLoggedIn } = useContext(AuthContext)
    const authorization = (event) => {
        event.preventDefault()
        const { email, password } = event.target
        setIsLoggedIn(logIn( email.value, password.value))
    }

     return (
    <div className="login-page">
      <div className="login-logo">
         <img src={HeadLogo} alt="Logo" />
      </div>
      <div className="login">
        <div className="login-wrapper">
          <h2 className='login-wrapper-title'>Войти</h2>
          <form className='login-form' onSubmit={authorization}>
          <label className='login-form-email'>
            <span className='login-form-email_span'>Email</span>
            <input name="email" type="email" placeholder='mail@mail.ru'/>
          </label>
          <label className='login-form-password'>
            <span className='login-form-password_span'>Пароль</span>
            <input name="password" type="password" placeholder='*************'/>
          </label>
          <span className='login-form-span'>Забыли пароль?</span>
              <button type='submit' className='login-wrapper-btn global-btn'>Войти</button>
        </form>
        <div className="login-registration">
          <span className='login-registration-question'>Новый пользователь? </span>
            <Link to='/registration'>
                <span className='login-registration-link'>Регистрация</span>
            </Link>
        </div>
        </div>
        </div>
    </div>
  )
}


export default LoginPage
