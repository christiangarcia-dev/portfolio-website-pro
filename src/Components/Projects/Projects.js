import './Projects.scss'
import React, { useState, useRef } from 'react';
import circleArrowIcon from '../../assets/icons/arrow.svg'
import EchoLingoImage from '../../assets/images/projects/echolingo1.png';
import DataConnectImage from '../../assets/images/projects/dataconnect.jpeg';
import InStockImage from '../../assets/images/projects/instock.png';
import BrainFlixImage from '../../assets/images/projects/brainflix.png';
import SpaceTourismImage from '../../assets/images/projects/spacetourism.png';
import Swiperzzz from '../Swiper/Swiper';

function Projects() {

    const [currentIndex, setCurrentIndex] = useState(0);
    // const swiperRef = useRef(null);

    const projects = [
        { name: 'EchoLingo', image: EchoLingoImage },
        { name: 'DataConnect', image: DataConnectImage },
        { name: 'InStock', image: InStockImage },
        { name: 'BrainFlix', image: BrainFlixImage },
        { name: 'SpaceTourism', image: SpaceTourismImage },
    ];

    // const itemWidth = () => {
    //     // Get width of a single item (including margin)
    //     return swiperRef.current
    //         ? swiperRef.current.firstChild.offsetWidth + 32 // Assume 16px margin on each side
    //         : 0;
    // };

    // const goToNext = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    // };
    
    // const goToPrev = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    // };

    return (
        <section className='projects'>
            <article className='projects__intro'>
                <h1 className='projects__intro__header'>The Projects</h1>
                <p className='projects__intro__paragraph'>A culmination of all my software, design, and personal projects! Feel free to checkout their websites, demos, or codebases.</p>
            </article>

            <section className='projects__container'>
                <Swiperzzz />
            </section>

            {/* <section className='projects__swiper' ref={swiperRef}>
                <div className='projects__swiper__container' style={{ transform: `translateX(-${currentIndex * itemWidth()}px)` }}>
                    {projects.map((project, index) => (
                        <img key={index} src={project.image} alt={project.name} className={`projects__swiper__item ${currentIndex === index ? 'active' : ''}`} />
                    ))}
                </div>
                <div className='projects__swiper__name-container'>
                    <h1 className='projects__swiper__project-name'>{projects[currentIndex].name}</h1>
                </div>
            </section>

            <div className='projects__arrow__group'>
                    <img className='projects__arrow-icon--tablet' src={circleArrowIcon} onClick={goToPrev}></img>
                    <img className='projects__arrow-icon--tablet' src={circleArrowIcon} onClick={goToNext}></img>
                </div>

            <div className='projects__horizontal-line'>
                <img className='projects__arrow-icon' src={circleArrowIcon} onClick={goToNext}></img>
                <img className='projects__arrow-icon' src={circleArrowIcon} onClick={goToPrev}></img>
            </div> */}
        </section>
    )
}

export default Projects;