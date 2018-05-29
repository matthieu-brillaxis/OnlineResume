import React from 'react';
import * as Scroll from 'react-scroll';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleUp from '@fortawesome/fontawesome-free-solid/faAngleUp';

function handleClick() {
  Scroll.animateScroll.scrollToTop();
}

const Footer = () => (
  <div className="footer">
    <FontAwesomeIcon className="footer-round-button" icon={faAngleUp} onClick={handleClick} size="2x" />
    <p>
        mbrillaxis ©.
    </p>
  </div>
);

export default Footer;
