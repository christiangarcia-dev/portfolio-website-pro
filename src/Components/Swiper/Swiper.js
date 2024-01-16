import './Swiper.scss'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import circleArrowIcon from '../../assets/icons/arrow.svg'
import githubSquareIcon from '../../assets/icons/github-circular.svg'
import externalLinkIcon from '../../assets/icons/external-link.svg'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import EchoLingoImage from '../../assets/images/projects/echolingo1.png';
import DataConnectImage from '../../assets/images/projects/dataconnect.png';
import InStockImage from '../../assets/images/projects/instock.png';
import BrainFlixImage from '../../assets/images/projects/brainflix1.png';
import SpaceTourismImage from '../../assets/images/projects/spacetourism1.png';
import BeesKneesImage from '../../assets/images/projects/beesknees1.png'
import FirstPortfolioImage from '../../assets/images/projects/firstportfolio.png'
import MindstillImage from '../../assets/images/projects/diamond-network.png'

const projectNames = [
    'EchoLingo', 
    'DataConnect', 
    'InStock', 
    'BrainFlix', 
    'Space Tourism', 
    'The Bees Knees', 
    'Old Portfolio', 
    'Mindstill'
];

const githubUrls = [
    'https://github.com/christiangarcia-dev/brainstation-capstone-client',
    'https://www.google.com/', // MISSING -- data connect repo
    'https://github.com/christiangarcia-dev/instock-client',
    'https://github.com/christiangarcia-dev/christian-garcia-brainflix',
    'https://github.com/christiangarcia-dev/space-tourism-website-main',
    'https://github.com/christiangarcia-dev/christian-garcia-bandsite',
    'https://github.com/christiangarcia-dev/frontend-portfolio',
    'https://gwu.app.box.com/s/5bb96m1hmuh25wzqt4b4iq3b7jnjxohz'
];

const externalUrls = [
    'https://echolingo.co',
    'https://www.figma.com/file/8h5rAfSvFa3Q7XaXfnzMcn/Industry-Project?type=design&node-id=0-1&mode=design&t=JR6P1g9YuTv9XXFI-0',
    'https://www.google.com/',
    'https://www.google.com/',
    'https://spacetourism-christiangarcia.netlify.app/',
    'https://bandsite-beeskness.netlify.app/',
    'https://christiangarcia.info/', // old portfolio -- switch to netlify domain 
    'https://gwu.app.box.com/s/5bb96m1hmuh25wzqt4b4iq3b7jnjxohz/file/1268858757470'
];

function Swiperzzz() {

    const swiperRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setCurrentIndex(swiper.activeIndex);
    };

    const handleGitHubClick = () => {
        const url = githubUrls[currentIndex];
        if(url) {
            window.open(url, '_blank');
        }
    };

    const handleExternalLinkClick = () => {
        const url = externalUrls[currentIndex];
        if(url) {
            window.open(url, '_blank');
        }
    };

    const getLinkStyle = (url) => {
        if (!url || url === 'https://www.google.com/') { 
            return { opacity: 0.5, pointerEvents: 'none' };
        }
        return {}; 
    };

    return (
        <>
            <div className="custom-swiper-container">
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={30}
                    pagination={{
                        type: 'progressbar',
                        clickable: 'true',
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    onSlideChange={handleSlideChange}
                    onSwiper={(swiper) => swiperRef.current = swiper}>
                    <SwiperSlide><img className='image' src={EchoLingoImage}></img></SwiperSlide>
                    <SwiperSlide><img className='image' src={DataConnectImage}></img></SwiperSlide>
                    <SwiperSlide><img className='image' src={InStockImage}></img></SwiperSlide>
                    <SwiperSlide><img className='image' src={BrainFlixImage}></img></SwiperSlide>
                    <SwiperSlide><img className='image' src={SpaceTourismImage}></img></SwiperSlide>
                    <SwiperSlide><img className='image' src={BeesKneesImage}></img></SwiperSlide>
                    <SwiperSlide><img className='image' src={FirstPortfolioImage}></img></SwiperSlide>
                    <SwiperSlide><img className='image' src={MindstillImage}></img></SwiperSlide>
                    <h1 className='name'>{projectNames[currentIndex]}
                        <img className='github' src={githubSquareIcon} onClick={handleGitHubClick} alt='project github link'></img>
                        <img className='external-link' src={externalLinkIcon} onClick={handleExternalLinkClick} alt='link to project' style={getLinkStyle(externalUrls[currentIndex])}></img>
                    </h1>
                </Swiper>

                
                <div className='projects__arrow-group'>
                        <img className='projects__arrow-icon--tablet' src={circleArrowIcon} onClick={() => swiperRef.current?.slidePrev()}></img>
                        <img className='projects__arrow-icon--tablet' src={circleArrowIcon} onClick={() => swiperRef.current?.slideNext()}></img>
                </div>

                <div className='projects__horizontal-line'>
                    <div className='projects__arrows__flex-container'>
                        <img className='projects__arrow-icon' src={circleArrowIcon} onClick={() => swiperRef.current?.slidePrev()}></img>
                        <img className='projects__arrow-icon' src={circleArrowIcon} onClick={() => swiperRef.current?.slideNext()}></img>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Swiperzzz;