import '../Navbar/Navbar.scss'
import { useState } from 'react'
import { Link } from 'react-scroll'
import NavModal from '../NavModal/NavModal'
import logoOrange from '../../assets/logo/logo-orange.svg'
import hamburgerMenu from '../../assets/icons/hamburger.svg'
import circleGradient from '../../assets/images/gradient-circle.svg'

function Navbar() {

    const [isNavModalOpen, setIsNavModalOpen] = useState(false);

    const toggleNavModal = () => {
        setIsNavModalOpen(!isNavModalOpen);
    };

    const reloadPage = () => {
        window.location.href = window.location.origin; 
    };

    return (
        <nav className='navbar' id='navbar'>
            <img className='navbar__logo' src={logoOrange} alt="Logo" onClick={reloadPage}></img>
            <div className='navbar__circle-gradient--wrapper'>
                <img className='navbar__circle-gradient' src={circleGradient} alt='decorative circular gradient'></img>
            </div>
            <section className='navbar__options'>
                <div className='navbar__options__group'>
                    <Link className='navbar__options__group--item' to='navbar' smooth={true} spy={true} offset={-10} duration={600}>Home</Link>
                    <Link className='navbar__options__group--item' to='about' smooth={true} spy={true} offset={-100} duration={600}>About Me</Link>
                    <Link className='navbar__options__group--item' to='skills' smooth={true} spy={true} offset={-50} duration={600}>Skills</Link>
                    <Link className='navbar__options__group--item' to='projects' smooth={true} spy={true} offset={-40} duration={600}>Projects</Link>
                </div>
                <Link className='navbar__options__contact' to='contact' smooth={true} spy={true} offset={-50} duration={600}>Contact Me</Link>
            </section>
            <img className='navbar__burger-menu' src={hamburgerMenu} alt="Menu" onClick={toggleNavModal}></img>
            {isNavModalOpen && <NavModal closeNavModal={toggleNavModal} />}
        </nav>
    )
}

export default Navbar;