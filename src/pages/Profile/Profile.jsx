import React from "react";
import './Profile.css'
import ProfileFomr from '../../components/profileItem/profieForm/ProfileForm'
import Navigation from "../../components/navigation/Navigation";


const ProfilePage = () => {
  return(
      <>
          <Navigation/>
          <div className="profile-page">
            <ProfileFomr/>
          </div>
      </>

  )
}

export default ProfilePage
