import React, { Component } from 'react';
import {
  FaUser,
  FaMapMarkerAlt,
  FaEnvelope,
  FaLink,
  FaDownload,
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { object } from 'prop-types';

class Profile extends Component {
  render() {
    // Destructure the necessary data from the props
    const { profileData } = this.props;

    return (
      <aside className='profile custom_shadow'>
        <div className='profile_name'>
          <h1 className='name'>{profileData.name}</h1>
          <h6 className='label'>{profileData.label}</h6>
        </div>
        <figure className='profile_image'>
          <img src={profileData.picture} alt='' />
        </figure>
        <ul className='profile-info'>
          {/* Displaying the profile info */}
          <li><span><FaUser /> {profileData.name}</span></li>
          <li><span><FaMapMarkerAlt /> {profileData.location.city}</span></li>
          <li><span><FaEnvelope /> {profileData.email}</span></li>
          <li><span><FaLink /> {profileData.website}</span></li>
        </ul>
        <hr />
        <div className='socials'>
          {/* Displaying social media links */}
          <ul>
            <li><a href={profileData.profiles[2].url} target='_blank' rel="noreferrer"><FaFacebook /></a></li>
            <li><a href={profileData.profiles[0].url} target='_blank' rel="noreferrer"><FaTwitter /></a></li>
            <li><a href={profileData.profiles[1].url} target='_blank' rel="noreferrer"><FaGithub /></a></li>
            <li><a href={profileData.profiles[3].url} target='_blank' rel="noreferrer"><FaLinkedin /></a></li>
          </ul>
        </div>

        <Button className="p-btn rounded-pill" variant="success">Success <FaDownload /></Button>
      </aside>
    );
  }
}

// Define the prop type for profileData as a required object
Profile.propTypes = {
  profileData: object.isRequired,
};

export default Profile;
