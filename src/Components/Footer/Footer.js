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
            <p className='footer__closer'>Commited to learning and enhancing this craft. Currently, diving deeper into the wonderful library of React.js, learning React Native, and pursuing an AWS Cloud Practicioner certification. Thank you for visiting! </p>
            <h1 className='footer__copyright'>© 2024 Christian Garcia . All rights reserved.</h1>
        </footer>
    )
};

export default Footer;