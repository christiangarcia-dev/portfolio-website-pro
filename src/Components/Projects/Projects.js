import './Projects.scss'
import Swiperzzz from '../Swiper/Swiper';

function Projects() {

    return (
        <section className='projects'>
            <article className='projects__intro'>
                <h1 className='projects__intro__header'>The Projects</h1>
                <p className='projects__intro__paragraph'>A culmination of all my software, design, and personal projects! Feel free to checkout their websites, demos, or codebases.</p>
            </article>

            <section className='projects__container'>
                <Swiperzzz />
            </section>
        </section>
    )
}

export default Projects;