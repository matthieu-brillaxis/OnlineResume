import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Profile from './components/Profile';
import Education from './components/Education';
import Skill from './components/Skill';
import Banner from './components/Banner';
import Experience from './components/Experience';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  componentDidMount() {
    document.title = 'Matthieu Brillaxis CV';
  }

  // Function to render profile section if there is data
  renderProfile() {
    if (this.props.profile) {
      return (
        <Profile {...this.props.profile} />
      );
    }
  }

  // Function to render education section if there is data
  renderEducation() {
    if (this.props.education) {
      return (
        <Education {...this.props.education} />
      );
    }
  }

  // Function to render skill section if there is data
  renderSkill() {
    if (this.props.skill) {
      return (
        <Skill {...this.props.skill} />
      );
    }
  }

  // Function to render skill section if there is data
  renderExperiences() {
    if (this.props.experiences) {
      return (
        <Experience {...this.props.experiences} />
      );
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Banner />
        {this.renderProfile()}
        {this.renderSkill()}
        {this.renderEducation()}
        {this.renderExperiences()}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  education: PropTypes.object.isRequired,
  skill: PropTypes.object.isRequired,
  experiences: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

export default App;
