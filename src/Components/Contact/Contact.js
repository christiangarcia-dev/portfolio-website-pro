import './Contact.scss'
import { useState } from 'react'
import moonImage from '../../assets/images/moon.png'
import githubIcon from '../../assets/icons/github.svg'
import mediumIcon from '../../assets/icons/medium.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import mailIcon from '../../assets/icons/mail.svg'
import circleGradient from '../../assets/images/gradient-circle.svg'

function Contact() {

    return (
        <section className='contact' id='contact'>
            <img className='contact__moon' src={moonImage}></img>
            <div className='contact__top'>
                <h1 className='contact__top__header'>Feel Free to Get in Touch with me</h1>
                <div className='contact__top__socials'>
                    <div className='contact__top__socials--wrapper'>
                        <div className='contact__top__socials--box'>
                            <a href='https://github.com/christiangarcia-dev' target='_blank' rel='noopener noreferrer' className='contact__bottom__socials--box'>
                                <img className='contact__top__socials--icon' src={githubIcon} alt='github icon'></img>
                            </a>
                        </div>
                        <div className='contact__top__socials--box'>
                            <a href='https://medium.com/@2001christiangarcia/my-software-engineering-journey-32ac253c2a4a' target='_blank' rel='noopener noreferrer' className='contact__bottom__socials--box'>
                                <img className='contact__top__socials--icon' src={mediumIcon} alt='medium icon'></img>
                            </a>
                        </div>
                    </div>
                    <div className='contact__top__socials--wrapper'>
                        <div className='contact__top__socials--box'>
                            <a href='https://www.linkedin.com/in/christiangarciadiaz/' target='_blank' rel='noopener noreferrer' className='contact__bottom__socials--box'>
                                <img className='contact__top__socials--icon' src={linkedinIcon} alt='linkedin icon'></img>
                            </a>
                        </div>
                        <div className='contact__top__socials--box'>
                            <a href='mailto:2001christiangarcia@gmail.com' className='contact__bottom__socials--box'>
                                <img className='contact__top__socials--icon' src={mailIcon} alt='email icon'></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <form className='contact__form' name='contact v1' method='POST' onSubmit='submit' netlify>
                <input type='hidden' name='form-name' value='contact v1' />
                <div className='contact__form__input-group'>
                    <div className='contact__form__input-subgroup'>
                        <label className='contact__form__label' htmlFor='firstName'>First Name</label>
                        <input className='contact__form__input' id='firstName' type='text' name='firstName' placeholder='John' required></input>
                    </div>
                    <div className='contact__form__input-subgroup'>
                        <label className='contact__form__label' htmlFor='lastName'>Last Name</label>
                        <input className='contact__form__input' id='lastName' type='text' name='lastName' placeholder='Johnson' required></input>
                    </div>
                </div>
                <div className='contact__form__input-group'>
                    <div className='contact__form__input-subgroup'>
                        <label className='contact__form__label' htmlFor='email'>Email Address</label>
                        <input className='contact__form__input' id='email' type='email' name='email' placeholder='johnjohnson@gmail.com'></input>
                    </div>
                    <div className='contact__form__input-subgroup'>
                        <label className='contact__form__label' htmlFor='tel'>Phone Number</label>
                        <input className='contact__form__input' id='tel' type='tel' name='tel' placeholder='+1 457 584 4567'></input>
                    </div>
                </div>

                <label className='contact__form__label' htmlFor='message'>Message</label>
                <textarea className='contact__form__input contact__form__input--textarea' id='message' type='text' name='message' placeholder='Type here...' required></textarea>

                <button className='contact__form__submit' type='submit'>Contact Me</button>
            </form>
            <div className='contact__bottom'>
                <a href='https://github.com/christiangarcia-dev' target='_blank' rel='noopener noreferrer' className='contact__bottom__socials--box'>
                    <img className='contact__bottom__socials--icon' src={githubIcon} alt='GitHub'></img>
                </a>
                <a href='https://medium.com/@2001christiangarcia/my-software-engineering-journey-32ac253c2a4a' target='_blank' rel='noopener noreferrer' className='contact__bottom__socials--box'>
                    <img className='contact__bottom__socials--icon' src={mediumIcon} alt='Medium'></img>
                </a>
                <a href='https://www.linkedin.com/in/christiangarciadiaz/' target='_blank' rel='noopener noreferrer' className='contact__bottom__socials--box'>
                    <img className='contact__bottom__socials--icon' src={linkedinIcon} alt='LinkedIn'></img>
                </a>
                <a href='mailto:2001christiangarcia@gmail.com' className='contact__bottom__socials--box'>
                    <img className='contact__bottom__socials--icon' src={mailIcon} alt='Email'></img>
                </a>
            </div>
            <div className='contact__circle-gradient--wrapper'>
                <img className='contact__circle-gradient' src={circleGradient} alt='decorative circular gradient'></img>
            </div>
        </section>
    )
}

export default Contact;