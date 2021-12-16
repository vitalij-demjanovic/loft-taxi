import React from 'react';
import './LoginForm.css'

const LoginForm = () => {
    return (
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
       <button className='login-wrapper-btn global-btn'>Войти</button>
       <div className="login-registration">
         <span className='login-registration-question'>Новый пользователь? </span>
         <span className='login-registration-link'>Регистрация</span>
       </div>
      </div>
    );
};

export default LoginForm;
