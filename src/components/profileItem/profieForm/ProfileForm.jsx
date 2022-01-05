import React, { useState } from 'react';
import Chip from '../../../assets/icon/chip.png'
import CardLogo from '../../../assets/icon/CardLogo.png'
import { connect } from "react-redux";
import { cardSave } from "../../../store/actions";
import { InfoCard } from "../../../api/api";
import './ProfileForm.css'

const ProfileForm = (props) => {
  const [text, setText] = useState('')
  const [exp, setEXP] = useState('')

  const NumCard = (event) => {setText(event.target.value)}
  const EXPCard = (event) => { setEXP(event.target.value) }

  const InfoCardUser = () => {
   return  InfoCard(props.token)
  }

  const token = props.token
  const SaveCardUser = (event) => {
    event.preventDefault()
    const { cardNumber, expiryDate, cardName, cvc } = event.target
    props.cardSave( cardNumber.value, expiryDate.value, cardName.value, cvc.value, token )
  }

    return (
      <div className="profile">
        <h2 className="profile-title">Профиль</h2>
        <p className='profile-p'>Ввдеите платежные данные</p>
          <div className="profile-paydata">
            <form className='profile-form' onSubmit={SaveCardUser} id='form1'>
            <label className='form-item'>
              <span className='form-item-span'>Имя владельца</span>
              <input type="cardName" name="cardName" className='form-item-input' placeholder='Loft'/>
            </label>
            <label className='form-item'>
              <span className='form-item-span'>Номер карты</span>
              <input type="cardNumber" name="cardNumber" className='form-item-input' maxLength="16" pattern="\d*" placeholder='5545  2300  3432  4521' value={text} onChange={NumCard}/>
            </label>
            <label className='expiration'>
              <label className='form-item'>
              <span className='form-item-span'>MM/YY</span>
              <input type="expiryDate" name="expiryDate" className='form-item-input' maxLength="5" pattern="\d*" placeholder='05/08' value={exp} onChange={EXPCard}/>
            </label>
            <label className='form-item'>
              <span className='form-item-span'>CVC</span>
              <input type="cvc" name="cvc" className='form-item-input' maxLength="4" pattern="\d*" placeholder='667' />
            </label>
            </label>
          </form>
          <div className="profile-card" onClick={InfoCardUser}>
            <div className="profile-card-head">
              <img src={CardLogo} alt="" />
              <span className='card-head-span'>{!exp ? '05/08' : exp}</span>
            </div>
            <div className='profile-card-number'>
              {!text ? '5545  2300  3432  4521' : text}
            </div>
            <div className="profile-card-footer">
            <img src={Chip} alt="" />
              <div className="master-card">
                <div className='master-card-div'/>
                <div className='master-card-div'/>
              </div>
            </div>
          </div>
          </div>
          <button type='submit' form='form1' className='profile-btn global-btn'>Сохранить</button>
      </div>
    );
};

export default connect(
    (state) => ({ token: state.auth.token }),
    { cardSave }
)(ProfileForm);
