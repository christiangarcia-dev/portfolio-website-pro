import './NavModal.scss'
import { Link } from 'react-scroll'
import closeIcon from '../../assets/icons/close.svg'

function NavModal({closeNavModal}) {

    return (
        <section className='nav-modal'>
            <img className='nav-modal__close' src={closeIcon} alt="close nav modal" onClick={closeNavModal}></img>
            <ul className='nav-modal__list'>
                <Link className='nav-modal__list__item' to='navbar' smooth={true} spy={true} offset={-10} duration={600} onClick={closeNavModal}>Home</Link>
                <Link className='nav-modal__list__item' to='about' smooth={true} spy={true} offset={-100} duration={600} onClick={closeNavModal}>About Me</Link>
                <Link className='nav-modal__list__item' to='skills' smooth={true} spy={true} offset={-50} duration={600} onClick={closeNavModal}>Skills</Link>
                <Link className='nav-modal__list__item' to='projects' smooth={true} spy={true} offset={-40} duration={600} onClick={closeNavModal}>Projects</Link>
                <Link className='nav-modal__contact' to='contact' smooth={true} spy={true} offset={0} duration={600} onClick={closeNavModal}>Contact Me</Link>
            </ul>
        </section>
    )
}

export default NavModal;