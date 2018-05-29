import React, { PureComponent } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import PropTypes from 'prop-types';
import TimelineItem from './elements/timelineItem';

export default class Experiences extends PureComponent {
  renderTimeline() {
    const { experiencesList } = this.props;
    return (
      experiencesList.map(element => <TimelineItem key={element.id} element={element} />)
    );
  }

  render() {
    return (
    // Experiences timeline
      <div className="section-container">
        <h2 className="section-title">Mes expériences</h2>
        <VerticalTimeline>
          {this.renderTimeline()}
        </VerticalTimeline>
      </div>
    );
  }
}

Experiences.propTypes = {
  experiencesList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};
