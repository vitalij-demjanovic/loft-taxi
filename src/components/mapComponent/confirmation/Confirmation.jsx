import React from 'react';
import './Confirmation.css'

const Confirmation = () => {
    const deleteLayer = () => {
        window.location.reload()
    }

    return (
        <div className="confirm">
            <h2 className="confirm-title">Заказ размещен</h2>
            <p className="confirm-text">
                Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
            </p>
            <button className='confirm-btn global-btn' onClick={deleteLayer}>Сделать новый заказ</button>
        </div>
    );
};

export default Confirmation
