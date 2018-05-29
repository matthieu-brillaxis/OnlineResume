import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import faDownload from '@fortawesome/fontawesome-free-solid/faDownload';
import PropTypes from 'prop-types';
import profilePicture from '../assets/img/profile-picture.jpeg';
import CV from '../assets/files/cv.pdf';


export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      isHovered: false,
    };
    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
  }


  hoverOn() {
    this.setState({ isHovered: true });
  }

  hoverOff() {
    this.setState({ isHovered: false });
  }

  render() {
    return (
      <div className="section-container profile-container">
        {/* My picture */}
        <div className="profile-picture-container">
          <div className={this.state.isHovered ? 'profile-popup popup-active' : 'profile-popup'}>
            <p>Télécharger mon CV</p>
          </div>
          <a className="profile-download" href={CV} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}><FontAwesomeIcon icon={faDownload} size="1x" /></a>
          <img src={profilePicture} alt="Matthieu Brillaxis" />
          <p className="profile-name">{this.props.name}</p>
          <p className="profile-title">{this.props.title}</p>
        </div>

        {/* About me */}
        <div className="about-container">
          <h2 className="about-title">A propos de moi</h2>
          <p className="about-desc">
            {this.props.desc}
          </p>
          <div className="about-data-div">
            <p><span className="about-data-label">Age</span>{this.props.age}</p>
          </div>
          <div className="about-data-div">
            <p><span className="about-data-label">Adresse</span>{this.props.address}, {this.props.city} {this.props.cp}</p>
          </div>
          <div className="about-data-div">
            <p><span className="about-data-label">Email</span><a href={`mailto:${this.props.email}`}>{this.props.email}</a></p>
          </div>
          <div className="about-data-div">
            <p><span className="about-data-label">Tél</span><a href={`tel:${this.props.phone}`}>{this.props.phone}</a></p>
          </div>
        </div>

        {/* Bar with icon */}
        <div className="bar-icon-container">
          <a href={this.props.github} className="bar-icon-icon"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
          <a href={this.props.linkedin} className="bar-icon-icon"><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></a>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  cp: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};
