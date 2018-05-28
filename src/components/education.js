import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import PropTypes from 'prop-types';

export default class Education extends Component { 
    render() {
        return (
            // Education timeline 
            <div className="section-container">
                <h2 className="section-title">Mes formations</h2>
                <VerticalTimeline>
                    {this.props.educationList.map((element, i) =>
                        <VerticalTimelineElement
                            className="timeline-element vertical-timeline-element--education"
                            date={element.date}
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            key={i}
                            id={i.toString()}
                            // icon={}
                        >
                            <h3 className="vertical-timeline-element-title">{element.name}</h3>
                            <a className="vertical-timeline-element-subtitle" href={element.website}>{element.website}</a>
                            <p>{element.degree}</p>
                        </VerticalTimelineElement>
                    )}
                </VerticalTimeline>
            </div>
        );
    }
}

Education.propTypes = {
    educationList: PropTypes.arrayOf(PropTypes.shape({
        date: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        website: PropTypes.string.isRequired,
        degree: PropTypes.string.isRequired,
    })),
}