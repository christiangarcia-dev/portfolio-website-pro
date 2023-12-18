import '../Navbar/Navbar.scss'
import logoOrange from '../../assets/logo/logo-orange.svg'
import hamburgerMenu from '../../assets/icons/hamburger.svg'
import circleGradient from '../../assets/images/gradient-circle.svg'

function Navbar() {

    return (
        <nav className='navbar'>
            <img className='navbar__logo' src={logoOrange}></img>
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
            <img className='navbar__burger-menu' src={hamburgerMenu}></img>
        </nav>
    )
}

export default Navbar;