import React, {useState} from 'react';
import classNames from "classnames";
import PropTypes from 'prop-types'
import styles from './Booking.css'
import standart from '../../../assets/image/standart.png'
import premium from '../../../assets/image/premium.png'
import biznis from '../../../assets/image/biznis.png'
import arrow from '../../../assets/icon/arrow.svg'
import { connect } from "react-redux";
import {addresslist} from "../../../store/actions";

const cx = classNames.bind(styles);

const Booking = (props) => {
    const [start, SetStart] = useState(false)
    const [end, SetEnd]= useState(false)
    const [car, SetCar] = useState('car1')


    const openStart = () => {
        SetStart(!start)
        console.log(props.addresslist())
        console.log(props.label)
    }

    const mass = ['ahoj', 'servus']

    return (
        <div className='booking-wrapper'>
          <div className="booking-setting">
              <div className="start-point">
                  START
                  <ul className={cx('dropdown-list-start', {start})}>
                      {mass.map((todo, index) => (
                          <li className='list-item' key={index}>
                              {todo}
                          </li>
                      ))}
                  </ul>
                  <img
                      className={classNames('list-arrow', {start})}
                      src={arrow} alt="arrow"
                      onClick={openStart}
                  />
              </div>
              <div className="end-point">
                  END
                  <ul className={classNames('dropdown-list-end', {end})}>
                      {mass.map((todo, index) => (
                          <li key={index}>
                              {todo}
                          </li>
                      ))}
                  </ul>
                  <img
                      className={classNames('list-arrow', {end})} src={arrow}
                      alt="arrow"
                      onClick={() => SetEnd(!end)}
                  />
              </div>
          </div>
          <div className="type-service">
            <div
                className={classNames('service', car === 'car1' ? 'active' : ' ')}
                onClick={() => SetCar('car1')}
            >
              <span className="service-name">Стандарт</span>
              <span className='service-text'>Стоимость</span>
              <span className='service-price'>150 ₽</span>
              <img src={standart} alt="" />
            </div>
            <div
                className={classNames('service', car === 'car2' ? 'active' : ' ')}
                onClick={() => SetCar('car2')}
            >
              <span className="service-name">Стандарт</span>
              <span className='service-text'>Стоимость</span>
              <span className='service-price'>250 ₽</span>
              <img src={premium} alt="" />
            </div>
            <div
                className={classNames('service', car === 'car3' ? 'active' : ' ')}
                onClick={() => SetCar('car3')}
            >
              <span className="service-name">Стандарт</span>
              <span className='service-text'>Стоимость</span>
              <span className='service-price'>300 ₽</span>
              <img src={biznis} alt="" />
            </div>
          </div>
          <button className='booking-btn global-btn' onClick={() => props.rout()}>Заказать</button>
        </div>
    );
};

export default connect(
    (state) => ({label: state.address.label}),
    {addresslist}
)(Booking);

Booking.propTypes = {
    rout: PropTypes.func
}
