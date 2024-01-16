import '../Header/Header.scss'
import { Link } from 'react-scroll'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import codingIcon from '../../assets/icons/coding-icon.svg'
import longArrowIcon from '../../assets/icons/long-arrow.svg'
import Carousel from '../Carousel/Carousel'

function Header() {

    return (
        <header className='header'>
            <Navbar />
            <section className='hero'>
                <article className='hero__article'>
                    <h1 className='hero__article__hi'>Hi! 👋 I'm Christian,</h1>
                    <h2 className='hero__article__position'>Software <img className='hero__article__coding-icon' src={codingIcon} alt='coding icon'></img> Engineer And <span className='hero__article__ux-design'>UX Designer</span></h2>
                    <Carousel />
                    {/* <p className='hero__article__about'>Lover of life’s healthier aspects, I’m into fitness, learning about wellness and psychology, and I enjoy spending my time outside.</p> */}
                    <Link to='footer' smooth={true} spy={true} offset={-10} duration={600}><img className='hero__article__arrow-icon' src={longArrowIcon} alt='scroll to bottom button'></img></Link>
                </article>
            </section>
            <div className='header__horizontal-line'>
                <Link to='footer' smooth={true} spy={true} offset={-10} duration={600}><img className='header__arrow-icon' src={longArrowIcon} alt='scroll to bottom button'></img></Link>
            </div>
        </header>
    )
}

export default Header;