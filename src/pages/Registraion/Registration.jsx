import React from "react";
import './Registration.css'
import HeadLogo from '../../assets/image/HeadLogo.png'
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import {registration} from "../../store/actions";

const Registration = (props) => {

    const addRegistration = (event) => {
        event.preventDefault()
        const { email, password, name, surname } = event.target
        props.registration(email.value, password.value, name.value, surname.value)
    }
     return (
    <div className="registration-page">
      <div className="registration-logo">
         <img src={HeadLogo} alt="Logo" />
      </div>
      <div className="registration">
        <div className="registration-wrapper">
          <h2 className='registration-wrapper-title'>Регистрация</h2>
          <form className='registration-form' onSubmit={addRegistration}>
          <label className='registration-form-email'>
            <span className='registration-form-email_span'>Email*</span>
            <input name="email" type="email" placeholder='mail@mail.ru'/>
          </label>
          <label className='registration-form-name'>
            <span className='registration-form-name_span'>Как вас зовут?*</span>
            <input name="name" type="name" placeholder='Петр'/>
            <input name="surname" type="surname" placeholder='Александрович'/>
          </label>
          <label className='registration-form-password'>
            <span className='registration-form-password_span'>Пароль</span>
            <input name="password" type="password" placeholder='*************'/>
          </label>
              <button type='submit' className='registration-wrapper-btn global-btn'>Зарегистрироваться</button>
        </form>
        <div className="registration-footer">
          <span className='registration-footer-question'>Уже зарегестрированны? </span>
            <Link to='/login'>
                <span className='registration-footer-link' >Войти</span>
            </Link>
        </div>
        </div>
      </div>
    </div>
  )
}


export default connect(
    null,
    {registration}
)(Registration)
