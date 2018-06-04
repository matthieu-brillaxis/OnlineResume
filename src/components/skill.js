import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filter from './elements/Filter';
import SkillCard from './elements/SkillCard';

export default class Skill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredValue: 'Tous',
    };
  }

  handleFilter = (value) => {
    this.setState({ filteredValue: value });
  }

  renderSkills = () => {
    const { skillList } = this.props;
    const { filteredValue } = this.state;
    return (
      skillList.map(element => <SkillCard key={element.id} element={element} active={element.type === filteredValue || filteredValue === 'Tous'} />)
    );
  }

  render() {
    return (
      <div className="section-container">
        <h2 className="section-title">Mes compétences</h2>
        <div className="skill-container">
          <ul className="skill-filter-container">
            <Filter title="Tous" active={this.state.filteredValue === 'Tous' ? 'active' : 'default'} filter={() => this.handleFilter('Tous')} />
            <Filter title="Front" active={this.state.filteredValue === 'Front' ? 'active' : 'default'} filter={() => this.handleFilter('Front')} />
            <Filter title="Back" active={this.state.filteredValue === 'Back' ? 'active' : 'default'} filter={() => this.handleFilter('Back')} />
            <Filter title="Mobile" active={this.state.filteredValue === 'Mobile' ? 'active' : 'default'} filter={() => this.handleFilter('Mobile')} />
            <Filter title="Autre" active={this.state.filteredValue === 'Autre' ? 'active' : 'default'} filter={() => this.handleFilter('Autre')} />
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
};
