import './Swiper.scss'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import circleArrowIcon from '../../assets/icons/arrow.svg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import EchoLingoImage from '../../assets/images/projects/echolingo1.png';
import DataConnectImage from '../../assets/images/projects/dataconnect.png';
import InStockImage from '../../assets/images/projects/instock.png';
import BrainFlixImage from '../../assets/images/projects/brainflix.png';
import SpaceTourismImage from '../../assets/images/projects/spacetourism.png';




function Swiperzzz() {

    const swiperRef = useRef(null);

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
                    onSwiper={(swiper) => swiperRef.current = swiper}
                >
                    <SwiperSlide><img className='image' src={EchoLingoImage}></img></SwiperSlide>
                    <SwiperSlide><img className='image' src={DataConnectImage}></img></SwiperSlide>
                    <SwiperSlide><img className='image' src={InStockImage}></img></SwiperSlide>
                    <SwiperSlide><img className='image' src={BrainFlixImage}></img></SwiperSlide>
                    <SwiperSlide><img className='image' src={SpaceTourismImage}></img></SwiperSlide>
                    <h1 className='name'>EchoLingo</h1>
                </Swiper>

                <div className='projects__horizontal-line'>
                    <img className='projects__arrow-icon' src={circleArrowIcon} onClick={() => swiperRef.current?.slidePrev()}></img>
                    <img className='projects__arrow-icon' src={circleArrowIcon} onClick={() => swiperRef.current?.slideNext()}></img>
                </div>
            </div>
        </>
    );
};

export default Swiperzzz;