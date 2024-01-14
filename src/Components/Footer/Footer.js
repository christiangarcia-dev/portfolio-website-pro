import './Footer.scss'
import React from 'react';
import logoWhite from '../../assets/logo/logo-white.svg'
import circleGradient from '../../assets/images/gradient-circle.svg'

function Footer() {

    const reloadPage = () => {
        window.location.href = window.location.origin; 
    };

    return (
        <footer className='footer' id='footer'>
            <div className='footer__circle-gradient--2-wrapper'>
                <img className='footer__circle-gradient--2' src={circleGradient}></img>
            </div>
            <img className='footer__logo' src={logoWhite} onClick={reloadPage}></img>
            <p className='footer__closer'>Lover of life’s healthier aspects, I’m into fitness, learning about wellness and psychology, and I enjoy spending my time outside. When I can I rejoice in diving into a good book or listening to thought provoking podcasts.</p>
            <h1 className='footer__copyright'>© 2024 Christian Garcia . All rights reserved.</h1>
        </footer>
    )
};

export default Footer;