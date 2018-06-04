import React, { PureComponent } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import PropTypes from 'prop-types';

export default class TimelineItem extends PureComponent {
  render() {
    const { element } = this.props;

    return (
      <VerticalTimelineElement
        className="timeline-element vertical-timeline-element--work"
        date={element.date}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        id={`experience-${element.id}`}
      >
        <h3 className="vertical-timeline-element-title">{element.name}</h3>
        <a className="vertical-timeline-element-subtitle" href={element.website}>{element.website}</a>
        {element.degree &&
          <p>{element.degree}</p>
        }
        {element.type && element.format &&
          <p>{element.type} - {element.format}</p>
        }
        {element.type && !element.format &&
          <p>{element.type}</p>
        }
        {element.competence &&
          <p>{element.competence}</p>
        }
      </VerticalTimelineElement>
    );
  }
}

TimelineItem.propTypes = {
  element: PropTypes.object.isRequired,
};

