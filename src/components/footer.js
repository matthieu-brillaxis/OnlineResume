import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleUp from '@fortawesome/fontawesome-free-solid/faAngleUp';

export default class Footer extends Component {

    constructor() {
        super();
        this.state = {
            scrollTop: 0
        }
    }

    componentWillMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        this.setState({scrollTop: (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0)});
    }

    render() {
        return (
            <div className="footer">
                <a href="" className="footer-round-button"><FontAwesomeIcon icon={faAngleUp} size="2x" /></a>
                <p>
                    mbrillaxis ©.
                </p>
            </div>
        );
    }
}