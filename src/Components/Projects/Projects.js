import './Projects.scss'
import React, { useState } from 'react';
import circleArrowIcon from '../../assets/icons/arrow.svg'
import EchoLingoImage from '../../assets/images/projects/echolingo.png';
import DataConnectImage from '../../assets/images/projects/dataconnect.jpeg';
import InStockImage from '../../assets/images/projects/instock.jpeg';
import BrainFlixImage from '../../assets/images/projects/brainflix.png';

function Projects() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        { name: 'EchoLingo', image: EchoLingoImage },
        { name: 'DataConnect', image: DataConnectImage },
        { name: 'InStock', image: InStockImage },
        { name: 'BrainFlix', image: BrainFlixImage },
        // Add other projects as needed
    ];

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    // Go to the previous project
    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    return (
        <section className='projects'>
            <article className='projects__intro'>
                <h1 className='projects__intro__header'>The Projects</h1>
                <p className='projects__intro__paragraph'>Lover of life’s healthier aspects, I’m into fitness, learning about wellness and psychology, and I enjoy spending my time outside.</p>
            </article>

            <section className='projects__swiper'>
                <div className='projects__swiper__container' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {projects.map((project, index) => (
                        <img key={index} src={project.image} alt={project.name} className={`projects__swiper__item ${currentIndex === index ? 'active' : ''}`} />
                    ))}
                </div>
                <div className='projects__swiper__name-container'>
                    <h1 className='projects__swiper__project-name'>{projects[currentIndex].name}</h1>
                </div>
            </section>

            <div className='projects__horizontal-line'>
                <img className='projects__arrow-icon' src={circleArrowIcon} onClick={goToNext}></img>
                <img className='projects__arrow-icon' src={circleArrowIcon} onClick={goToPrev}></img>
            </div>
        </section>
    )
}

export default Projects;