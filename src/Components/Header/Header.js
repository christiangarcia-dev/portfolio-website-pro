import '../Header/Header.scss'
import Navbar from '../Navbar/Navbar';
import codingIcon from '../../assets/icons/coding-icon.svg';
import longArrowIcon from '../../assets/icons/long-arrow.svg'

function Header() {

    return (
        <header className='header'>
            <Navbar />
            <section className='hero'>
                <article className='hero__article'>
                    <h1 className='hero__article__hi'>Hi! 👋 I'm Christian,</h1>
                    <h2 className='hero__article__position'>Software <img className='hero__article__coding-icon' src={codingIcon}></img> Engineer And <span className='hero__article__ux-design'>UX Designer</span></h2>
                    <p className='hero__article__about'>Lover of life’s healthier aspects, I’m into fitness, learning about wellness and psychology, and I enjoy spending my time outside.</p>
                </article>
            </section>
            <div className='header__horizontal-line'>
                <img className='header__arrow-icon' src={longArrowIcon}></img>
            </div>
        </header>
    )
}

export default Header;