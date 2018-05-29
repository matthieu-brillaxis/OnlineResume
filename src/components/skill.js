import React, { PureComponent } from 'react';
import SkillBar from 'react-skillbars';
import PropTypes from 'prop-types';

export default class Skill extends PureComponent {
  render() {
    return (
      <div className="section-container">
        <h2 className="section-title">Mes compétences</h2>
        <div className="skillbar-container">
          <SkillBar skills={this.props.skillList} height={20} colors={this.props.barColors} />
        </div>
      </div>
    );
  }
}

Skill.propTypes = {
  skillList: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
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
