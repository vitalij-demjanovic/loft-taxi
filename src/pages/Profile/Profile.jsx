import React from "react";
import './Profile.css'
import ProfileFomr from '../../components/profileItem/profieForm/ProfileForm'
import Navigation from "../../components/navigation/Navigation";
import ProfileModal from "../../components/profileItem/ProfileModal/ProfileModal";
import { connect } from "react-redux";


const ProfilePage = (props) => {
  return(
      <>
          <Navigation/>
          <div className="profile-page">
              {props.received ? <ProfileModal/> : <ProfileFomr/>}
          </div>
      </>

  )
}

export default connect(
    (state) => ({ received: state.card.received })
)(ProfilePage)
