import React, { Component } from 'react';
import Profile from './components/profile';
import Education from './components/education';
import Skill from './components/skill';
import Banner from './components/banner';
import Experiences from './components/experiences';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  // Function to render profile section if there is data
  renderProfile() {
    if(this.props.profile) {
      return (
        <Profile {...this.props.profile} />
      );
    }
  }

  // Function to render education section if there is data
  renderEducation() {
    if(this.props.education){
      return(
        <Education {...this.props.education} />
      )
    }
  }

  // Function to render skill section if there is data
  renderSkill() {
    if(this.props.skill){
      return(
        <Skill {...this.props.skill} />
      )
    }
  }

  // Function to render skill section if there is data
  renderExperiences() {
    if(this.props.experiences){
      return(
        <Experiences {...this.props.experiences} />
      )
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

export default App;
