import './NavModal.scss'
import closeIcon from '../../assets/icons/close.svg'

function NavModal({closeNavModal}) {

    return (
        <section className='nav-modal'>
            <img className='nav-modal__close' src={closeIcon} alt="Close" onClick={closeNavModal}></img>
            <ul className='nav-modal__list'>
                <li className='nav-modal__list__item'>Home</li>
                <li className='nav-modal__list__item'>About Me</li>
                <li className='nav-modal__list__item'>Skills</li>
                <li className='nav-modal__list__item'>Projects</li>
                <button className='nav-modal__contact'>Contact Me</button>
            </ul>
        </section>
    )
}

export default NavModal;