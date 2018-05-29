import React, { PureComponent } from 'react';
import * as Scroll from 'react-scroll';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleUp from '@fortawesome/fontawesome-free-solid/faAngleUp';

export default class Footer extends PureComponent {
  handleClick = () => {
    Scroll.animateScroll.scrollToTop();
  }

  render() {
    return (
      <div className="footer">
        <FontAwesomeIcon className="footer-round-button" icon={faAngleUp} onClick={this.handleClick} size="2x" />
        <p>
            mbrillaxis ©.
        </p>
      </div>
    );
  }
}
