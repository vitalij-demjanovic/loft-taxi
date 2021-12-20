import React from 'react';
import Chip from '../../../assets/icon/chip.png'
import CardLogo from '../../../assets/icon/CardLogo.png'
import './ProfileForm.css'

const ProfileForm = () => {
    return (
      <div className="profile">
        <h2 className="profile-title">Профиль</h2>
        <p className='profile-p'>Ввдеите платежные данные</p>
          <div className="profile-paydata">
            <form className='profile-form'>
            <label className='form-item'>
              <span className='form-item-span'>Имя владельца</span>
              <input type="text" name="name" className='form-item-input' placeholder='Loft'/>
            </label>
            <label className='form-item'>
              <span className='form-item-span'>Номер карты</span>
              <input type="tel" name="name" className='form-item-input' maxlength="19" pattern="\d*" placeholder='5545  2300  3432  4521'/>
            </label>
            <label className='expiration'>
              <label className='form-item'>
              <span className='form-item-span'>MM/YY</span>
              <input type="tel" name="name" className='form-item-input' maxlength="5" pattern="\d*" placeholder='05/08'/>
            </label>
            <label className='form-item'>
              <span className='form-item-span'>CVC</span>
              <input type="tel" name="name" className='form-item-input' maxlength="5" pattern="\d*" placeholder='667'/>
            </label>
            </label>
          </form>
          <div className="profile-card">
            <div className="profile-card-head">
              <img src={CardLogo} alt="" />
              <span className='card-head-span'>05/08</span>
            </div>
            <div className='profile-card-number'>
            5545    2300    3432    4521
            </div>
            <div className="profile-card-footer">
            <img src={Chip} alt="" />
              <div className="master-card">
                <div className='master-card-div'></div>
                <div className='master-card-div'></div>
              </div>
            </div>
          </div>
          </div>
          <button className='profile-btn global-btn'>Сохранить</button>
      </div>
    );
};

export default ProfileForm;
