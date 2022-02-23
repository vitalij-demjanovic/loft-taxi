/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import classNames from "classnames";
import styles from './Booking.css'
import standart from '../../../assets/image/standart.png'
import premium from '../../../assets/image/premium.png'
import biznis from '../../../assets/image/biznis.png'
import arrow from '../../../assets/icon/arrow.svg'
import { connect } from "react-redux";
import {addresslist, bookTrip} from "../../../store/actions";

const cx = classNames.bind(styles);

const Booking = (props) => {
    const [start, SetStart] = useState(false)
    const [end, SetEnd]= useState(false)
    const [car, SetCar] = useState('car1')
    const [valueStart, SetValueStart] = useState('Start')
    const [valueEnd, SetValueEnd] = useState('End')

    const route = () => {
        if(valueStart !== 'Start' && valueEnd !== 'End') {
            props.bookTrip(valueStart, valueEnd)
        } else {
            console.log('Select Route')
        }
    }

    useEffect(() => {
        props.addresslist()
    }, [])

    const mass = props.label || []

    return (
        <div className='booking-wrapper'>
          <div className="booking-setting">
              <div className="start-point">
                  {valueStart}
                  <ul className={cx('dropdown-list-start', {start})}>
                      {mass.map((item, index) => (
                          <li className='list-item'
                              key={index}
                              onClick={() => {
                              SetValueStart(item);
                              SetStart(false);
                          }}>
                              {item}
                          </li>
                      ))}
                  </ul>
                  <img
                      className={classNames('list-arrow', {start})}
                      src={arrow} alt="arrow"
                      onClick={() => SetStart(!start)}
                  />
              </div>
              <div className="end-point">
                  {valueEnd}
                  <ul className={classNames('dropdown-list-end', {end})}>
                      {mass.map((item, index) => (
                          <li className='list-item'
                              key={index} onClick={() => {
                              SetValueEnd(item);
                              SetEnd(false);
                          }}>
                              {item}
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
          <button className='booking-btn global-btn' onClick={route}>Заказать</button>
        </div>
    );
};

export default connect(
    (state) => ({
        label: state.address.label,
        trip:state.trip.trip
    }),
    {addresslist, bookTrip}
)(Booking);
