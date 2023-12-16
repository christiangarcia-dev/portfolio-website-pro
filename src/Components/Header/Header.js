import '../Header/Header.scss'
import Navbar from "../Navbar/Navbar";
import logo from '../../assets/logo/logocircle.png'

function Header() {

    return (
        <header className="header">
            <img className='header__logo' src={logo}></img>
            <Navbar /> 
            <article className='header__article'>
                <h1 className='header__article__hello'>Hi there 👋 , i'm</h1>
                <h2 className='header__article__name'>christian.</h2>
                <h3 className='header__article__role'>developer + designer 👨‍💻</h3>
                <p className='header__article__about'>I’m a creative oriented full-stack developer based in Miami. I love design and bodybuilding!</p>
                <button className='header__article__button'>Hire me</button>
            </article>
        </header>
    )
}

export default Header;