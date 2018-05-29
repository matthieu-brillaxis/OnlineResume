import React, { PureComponent } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import PropTypes from 'prop-types';
import TimelineItem from './elements/TimelineItem';

export default class Education extends PureComponent {
  renderTimeline = () => {
    const { educationList } = this.props;
    return (
      educationList.map(element => <TimelineItem key={element.id} element={element} />)
    );
  }

  render() {
    return (
    // Education timeline
      <div className="section-container">
        <h2 className="section-title">Mes formations</h2>
        <VerticalTimeline>
          {this.renderTimeline()}
        </VerticalTimeline>
      </div>
    );
  }
}

Education.propTypes = {
  educationList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
  })).isRequired,
};
