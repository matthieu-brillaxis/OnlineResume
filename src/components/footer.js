import React from 'react';
import * as Scroll from 'react-scroll';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleUp from '@fortawesome/fontawesome-free-solid/faAngleUp';

const Footer = {
  render() {
    return (
      <div className="footer">
        <FontAwesomeIcon className="footer-round-button" onClick={Scroll.animateScroll.scrollToTop()} icon={faAngleUp} size="2x" />
        <p>
          mbrillaxis ©.
        </p>
      </div>
    );
  },
};

export default Footer;
