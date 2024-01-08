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

    const projects = [
        { name: 'EchoLingo', image: EchoLingoImage },
        { name: 'DataConnect', image: DataConnectImage },
        { name: 'InStock', image: InStockImage },
        { name: 'BrainFlix', image: BrainFlixImage },
        { name: 'SpaceTourism', image: SpaceTourismImage },
    ];

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