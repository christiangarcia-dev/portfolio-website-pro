import './Contact.scss'
import moonImage from '../../assets/images/moon.png'
import githubIcon from '../../assets/icons/github.svg'
import mediumIcon from '../../assets/icons/medium.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import mailIcon from '../../assets/icons/mail.svg'

function Contact() {

    return (
        <section className='contact'>
            <img className='contact__moon' src={moonImage}></img>
            <div className='contact__top'>
                <h1 className='contact__top__header'>Feel Free to Get in Touch with me</h1>
                <div className='contact__top__socials'>
                    <div className='contact__top__socials--wrapper'>
                        <div className='contact__top__socials--box'>
                            <a href='https://github.com/christiangarcia-dev' target='_blank' rel='noopener noreferrer' className='contact__bottom__socials--box'>
                                <img className='contact__top__socials--icon' src={githubIcon}></img>
                            </a>
                        </div>
                        <div className='contact__top__socials--box'>
                            <a href='https://medium.com/@2001christiangarcia/my-software-engineering-journey-32ac253c2a4a' target='_blank' rel='noopener noreferrer' className='contact__bottom__socials--box'>
                                <img className='contact__top__socials--icon' src={mediumIcon}></img>
                            </a>
                        </div>
                    </div>
                    <div className='contact__top__socials--wrapper'>
                        <div className='contact__top__socials--box'>
                            <a href='https://www.linkedin.com/in/christiangarciadiaz/' target='_blank' rel='noopener noreferrer' className='contact__bottom__socials--box'>
                                <img className='contact__top__socials--icon' src={linkedinIcon}></img>
                            </a>
                        </div>
                        <div className='contact__top__socials--box'>
                            <a href='mailto:2001christiangarcia@gmail.com' className='contact__bottom__socials--box'>
                                <img className='contact__top__socials--icon' src={mailIcon}></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <form className='contact__form'>
                <div className='contact__form__input-group'>
                    <div className='contact__form__input-subgroup'>
                        <label className='contact__form__label'>First Name</label>
                        <input className='contact__form__input' placeholder='John'></input>
                    </div>
                    <div className='contact__form__input-subgroup'>
                        <label className='contact__form__label'>Last Name</label>
                        <input className='contact__form__input' placeholder='Johnson'></input>
                    </div>
                </div>
                <div className='contact__form__input-group'>
                    <div className='contact__form__input-subgroup'>
                        <label className='contact__form__label'>Email Address</label>
                        <input className='contact__form__input' placeholder='johnjohnson@gmail.com'></input>
                    </div>
                    <div className='contact__form__input-subgroup'>
                        <label className='contact__form__label'>Phone Number</label>
                        <input className='contact__form__input' placeholder='+1 457 584 4567'></input>
                    </div>
                </div>

                <label className='contact__form__label'>Message</label>
                <textarea className='contact__form__input contact__form__input--textarea' placeholder='Type here...'></textarea>

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
        </section>
    )
}

export default Contact;