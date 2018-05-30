import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filter from './elements/Filter';
import SkillCard from './elements/SkillCard';

export default class Skill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skillList: this.props,
    };
  }

  // Func used into skill filter to select good skills
  // filter= (value) => {
  //   this.state.skillList.map(element => (
  //     element.type === value ? this.state.skillList.element.active = true : this.state.skillList.active = false
  //   ));
  // }

  // Func to render all skills
  renderSkills = () => {
    this.state.skillList.map(element => <SkillCard key={element.id} element={element} />);
  }

  render() {
    return (
      <div className="section-container">
        <h2 className="section-title">Mes compétences</h2>
        <div className="skill-container">
          <ul className="skill-filter-container">
            <Filter title="Tous" />
            <Filter title="Front" />
            <Filter title="Back" />
            <Filter title="Mobile" />
            <Filter title="Autre" />
          </ul>
          <div className="skill-result-container">
            {this.renderSkills()}
          </div>
        </div>
      </div>
    );
  }
}

Skill.propTypes = {
  skillList: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
  })).isRequired,
  barColors: PropTypes.shape({
    bar: PropTypes.string,
    title: PropTypes.shape({
      text: PropTypes.string,
      background: PropTypes.string,
    }),
  }).isRequired,
};
