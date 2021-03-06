import React, { PureComponent } from 'react';
import 'react-vertical-timeline-component/style.min.css';
import PropTypes from 'prop-types';

export default class Filter extends PureComponent {
  render() {
    return (
      <li className={`skill-filter ${this.props.active}`}><button onClick={this.props.filter}>{ this.props.title }</button></li>
    );
  }
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  filter: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
};

