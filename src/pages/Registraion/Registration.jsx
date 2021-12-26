import React from "react";
import './Registration.css'
import HeadLogo from '../../assets/image/HeadLogo.png'

const Registration = (props) => {
     return (
    <div className="registration-page">
      <div className="registration-logo">
         <img src={HeadLogo} alt="Logo" />
      </div>
      <div className="registration">
        <div className="registration-wrapper">
          <h2 className='registration-wrapper-title'>Регистрация</h2>
          <form className='registration-form'>
          <label className='registration-form-email'>
            <span className='registration-form-email_span'>Email*</span>
            <input name="firstName" type="email" placeholder='mail@mail.ru'/>
          </label>
          <label className='registration-form-name'>
            <span className='registration-form-name_span'>Как вас зовут?*</span>
            <input name="firstName" type="text" placeholder='Петр Александрович'/>
          </label>
          <label className='registration-form-password'>
            <span className='registration-form-password_span'>Пароль</span>
            <input name="password" type="text" placeholder='*************'/>
          </label>
        </form>
        <button className='registration-wrapper-btn global-btn'>Зарегистрироваться</button>
        <div className="registration-footer">
          <span className='registration-footer-question'>Уже зарегестрированны? </span>
          <span className='registration-footer-link' onClick={() => props.navigation('login')}>Войти</span>
        </div>
        </div>
      </div>
    </div>
  )
}
 

export default Registration
