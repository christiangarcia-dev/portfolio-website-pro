import './Education.scss'
import checkIcon from '../../assets/icons/check.svg'
import downloadIcon from '../../assets/icons/download-svg.svg'
import circleArrowIcon from '../../assets/icons/arrow.svg'

function Education() {

    return (
        <section className='education'>
            <h1 className='education__header'>Education</h1>
            <div className='education__card-container'>
                <div className='education__card'>
                    <div className='education__card__checkbox'>
                        <img className='education__card__check' src={checkIcon}></img>
                    </div>
                    <p className='education__card--degree'>B.A in Computer Science</p>
                    <p className='education__card--institution'>George Washington University - Diploma</p>
                    <button className='education__card--download'><img className='education__card--download-icon'></img> Download PDF</button>
                </div>
                <div className='education__card'>
                    <div className='education__card__checkbox'>
                        <img className='education__card__check' src={checkIcon}></img>
                    </div>
                    <p className='education__card--degree'>B.A in Interaction Design</p>
                    <p className='education__card--institution'>George Washington University - Diploma</p>
                    <button className='education__card--download'><img className='education__card--download-icon'></img> Download PDF</button>
                </div>
                <div className='education__card'>
                    <div className='education__card__checkbox'>
                        <img className='education__card__check' src={checkIcon}></img>
                    </div>
                    <p className='education__card--degree'>Software Engineering Bootcamp</p>
                    <p className='education__card--institution'>BrainStation | Miami |12 weeks - Diploma</p>
                    <button className='education__card--download'><img className='education__card--download-icon'></img> Download PDF</button>
                </div>
                <div className='education__card'>
                    <div className='education__card__checkbox'>
                        <img className='education__card__check' src={checkIcon}></img>
                    </div>
                    <p className='education__card--degree'>The Web Developer Bootcamp</p>
                    <p className='education__card--institution'>Udemy | Online - No Diploma</p>
                    <button className='education__card--download'><img className='education__card--download-icon'></img> Download PDF</button>
                </div>
            </div>
            <div className='education__swiper__buttons'>
                <img className='education__swiper__button--next' src={circleArrowIcon}></img>
                <img className='education__swiper__button--previous' src={circleArrowIcon}></img>
            </div>
        </section>
    )
}

export default Education;