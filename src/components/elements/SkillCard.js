import React, { PureComponent } from 'react';
import 'react-vertical-timeline-component/style.min.css';
import PropTypes from 'prop-types';

export default class SkillCard extends PureComponent {
  render() {
    const { element } = this.props;
    const isActive = this.props.active;
    if (isActive) {
      return (
        <div className={`skill-card ${element.type}`}>
          <p>{element.name}</p>
        </div>
      );
    }
    return (null);
  }
}

SkillCard.propTypes = {
  element: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
};

