import React from "react";
import './ProfileModal.css'
const ProfileModal = () => {

    const resetToMap = () => {
       window.location.reload()
    }

  return (
    <div className="profile-modal">
      <h2 className="profile-modal-title">Профиль</h2>
      <p className="profile-modal-text">Платёжные данные обновлены. Теперь вы можете заказывать такси.</p>
      <button className="profile-modal-btn global-btn" onClick={resetToMap} >Перейти на карту</button>
    </div>
  )
}

export default ProfileModal
