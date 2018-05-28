import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import PropTypes from 'prop-types';

export default class Experiences extends Component { 
    render() {
        return (
            // Experiences timeline 
            <div className="section-container">
                <h2 className="section-title">Mes expériences</h2>
                <VerticalTimeline>
                    {this.props.experiencesList.map((element, i) =>
                        <VerticalTimelineElement
                            className="timeline-element vertical-timeline-element--work"
                            date={element.date}
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            key={i}
                            id={i.toString()}
                            // icon={}
                        >
                            <h3 className="vertical-timeline-element-title">{element.name}</h3>
                            <a className="vertical-timeline-element-subtitle" href={element.website}>{element.website}</a>
                            <p>{element.type}</p>
                        </VerticalTimelineElement>
                    )}
                </VerticalTimeline>
            </div>
        );
    }
}

Experiences.propTypes = {
    experiencesList: PropTypes.arrayOf(PropTypes.shape({
        date: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        website: PropTypes.string.isRequired,
    })),
}