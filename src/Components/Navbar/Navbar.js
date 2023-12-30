import '../Navbar/Navbar.scss'
import { useState } from 'react'
import NavModal from '../NavModal/NavModal'
import logoOrange from '../../assets/logo/logo-orange.svg'
import hamburgerMenu from '../../assets/icons/hamburger.svg'
import circleGradient from '../../assets/images/gradient-circle.svg'

function Navbar() {

    const [isNavModalOpen, setIsNavModalOpen] = useState(false);

    const toggleNavModal = () => {
        setIsNavModalOpen(!isNavModalOpen);
    };

    return (
        <nav className='navbar'>
            <img className='navbar__logo' src={logoOrange} alt="Logo"></img>
            {/* <img className='navbar__circle-gradient' src={circleGradient}></img> */}
            <section className='navbar__options'>
                <div className='navbar__options__group'>
                    <button className='navbar__options__group--item'>Home</button>
                    <button className='navbar__options__group--item'>About Me</button>
                    <button className='navbar__options__group--item'>Skills</button>
                    <button className='navbar__options__group--item'>Projects</button>
                </div>
                <button className='navbar__options__contact'>Contact Me</button>
            </section>
            <img className='navbar__burger-menu' src={hamburgerMenu} alt="Menu" onClick={toggleNavModal}></img>

            {isNavModalOpen && <NavModal closeNavModal={toggleNavModal} />}
        </nav>
    )
}

export default Navbar;