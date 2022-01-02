import React from 'react';
import './Booking.css'
import standart from '../../../assets/image/standart.png'
import premium from '../../../assets/image/premium.png'
import biznis from '../../../assets/image/biznis.png'

const Booking = () => {
    return (
        <div className='booking-wrapper'>
          <div className="booking-setting">
            <label className="start-point">
              <input type="text" placeholder='Start'/>
            </label>
            <label className="end-point">
              <input type="text" placeholder='End'/>
            </label>
          </div>
          <div className="type-service">
            <div className="service">
              <span className="service-name">Стандарт</span>
              <span className='service-text'>Стоимость</span>
              <span className='service-price'>150 ₽</span>
              <img src={standart} alt="" />
            </div>
            <div className="service">
              <span className="service-name">Стандарт</span>
              <span className='service-text'>Стоимость</span>
              <span className='service-price'>250 ₽</span>
              <img src={premium} alt="" />
            </div>
            <div className="service">
              <span className="service-name">Стандарт</span>
              <span className='service-text'>Стоимость</span>
              <span className='service-price'>300 ₽</span>
              <img src={biznis} alt="" />
            </div>
          </div>
          <button className='booking-btn global-btn'>Заказать</button>
        </div>
    );
};

export default Booking;
