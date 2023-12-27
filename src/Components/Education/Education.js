import './Education.scss'
import { useState } from 'react'
import checkIcon from '../../assets/icons/check.svg'
import downloadIcon from '../../assets/icons/download-svg.svg'
import circleArrowIcon from '../../assets/icons/arrow.svg'

function Education() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const totalCards = 4; 

    const goToNextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    };

    const goToPreviousCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
    };

    return (
        <section className='education'>
            <h1 className='education__header'>Education</h1>
            <div className='education__card-container' style={{ transform: `translateX(-${currentIndex * 25}%)` }}>    
                <div className='education__card'>
                    <div className='education__card__checkbox'>
                        <img className='education__card__check' src={checkIcon}></img>
                    </div>
                    <p className='education__card--degree'>B.A in Computer Science</p>
                    <p className='education__card--institution'>George Washington University - Diploma</p>
                    <button className='education__card--download'><img className='education__card--download-icon' src={downloadIcon}></img> Download PDF</button>
                </div>
                <div className='education__card'>
                    <div className='education__card__checkbox'>
                        <img className='education__card__check' src={checkIcon}></img>
                    </div>
                    <p className='education__card--degree'>B.A in Interaction Design</p>
                    <p className='education__card--institution'>George Washington University - Diploma</p>
                    <button className='education__card--download'><img className='education__card--download-icon' src={downloadIcon}></img> Download PDF</button>
                </div>
                <div className='education__card'>
                    <div className='education__card__checkbox'>
                        <img className='education__card__check' src={checkIcon}></img>
                    </div>
                    <p className='education__card--degree'>Software Engineering Bootcamp</p>
                    <p className='education__card--institution'>BrainStation | Miami | 12 weeks - Diploma</p>
                    <button className='education__card--download'><img className='education__card--download-icon' src={downloadIcon}></img> Download PDF</button>
                </div>
                <div className='education__card'>
                    <div className='education__card__checkbox'>
                        <img className='education__card__check' src={checkIcon}></img>
                    </div>
                    <p className='education__card--degree'>The Web Developer Bootcamp</p>
                    <p className='education__card--institution'>Udemy | Online - No Diploma</p>
                    <button className='education__card--download'><img className='education__card--download-icon' src={downloadIcon}></img> Download PDF</button>
                </div>
            </div>
            <div className='education__swiper__buttons'>
                <img className='education__swiper__buttons--previous' src={circleArrowIcon} onClick={goToPreviousCard}></img>
                <img className='education__swiper__buttons--next' src={circleArrowIcon} onClick={goToNextCard}></img>
            </div>
        </section>
    )
}

export default Education;