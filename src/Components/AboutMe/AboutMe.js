import './AboutMe.scss'

import resumePdfFile from '../../assets/documents/Resume-CG.pdf';
import headshot from '../../assets/images/headshot.jpeg'

function AboutMe() {

    return (
        <section className='about'>
            <div className='about__outer-circle'>
                <div className='about__inner-circle'>
                    <div className='about__headshot-wrapper'>
                        <img className='about__headshot' src={headshot}></img>
                    </div>
                </div>
            </div>
            <div className='about__content'>
                <h1 className='about__content__header'>About Me</h1>
                <p className='about__content__paragraph'>Lover of life’s healthier aspects, I’m into fitness, learning about wellness and psychology, and I enjoy spending my time outside.</p>
                <p className='about__content__paragraph'>When` I can I rejoice in diving into a good book or listening to thought provoking podcasts.</p>
                <a className='about__content__resume' href={resumePdfFile} download='Resume-CG.pdf'>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2222 17H3.77777C2.76875 17 1.82008 16.607 1.1065 15.8935C0.392963 15.18 0 14.2313 0 13.2222V12.2777C0 11.7561 0.42282 11.3332 0.94445 11.3332C1.46608 11.3332 1.8889 11.7561 1.8889 12.2777V13.2222C1.8889 13.7267 2.0854 14.2011 2.4421 14.5578C2.79891 14.9146 3.27323 15.1111 3.77777 15.1111H13.2222C13.7267 15.1111 14.201 14.9146 14.5578 14.5578C14.9146 14.201 15.1111 13.7267 15.1111 13.2222V12.2777C15.1111 11.7561 15.5339 11.3332 16.0555 11.3332C16.5771 11.3332 17 11.7561 17 12.2777V13.2222C17 14.2312 16.607 15.1799 15.8935 15.8935C15.1799 16.607 14.2312 17 13.2222 17ZM8.49998 13.2222C8.36934 13.2222 8.24496 13.1956 8.1318 13.1477C8.02622 13.1031 7.92702 13.0383 7.84022 12.9535C7.84018 12.9535 7.84018 12.9535 7.84015 12.9535C7.83952 12.9529 7.8389 12.9523 7.83827 12.9516C7.83811 12.9515 7.83791 12.9513 7.83774 12.9511C7.83721 12.9506 7.83675 12.9502 7.83626 12.9497C7.83593 12.9493 7.83563 12.9491 7.8353 12.9487C7.83497 12.9484 7.83454 12.9479 7.83425 12.9477C7.83359 12.947 7.83286 12.9463 7.8322 12.9456L4.0544 9.1678C3.68559 8.79899 3.68559 8.20098 4.0544 7.83213C4.42321 7.46332 5.02125 7.46329 5.39006 7.83213L7.55557 9.99764V0.94445C7.55553 0.42282 7.97835 0 8.49998 0C9.02161 0 9.44447 0.42282 9.44447 0.94445V9.9976L11.6099 7.83213C11.9787 7.46332 12.5768 7.46332 12.9456 7.83213C13.3144 8.20095 13.3144 8.79899 12.9456 9.1678L9.1678 12.9456C9.16714 12.9462 9.16641 12.947 9.16575 12.9476C9.16539 12.9479 9.16499 12.9484 9.1647 12.9486C9.16437 12.949 9.16407 12.9493 9.16374 12.9496C9.16328 12.9501 9.16275 12.9506 9.16229 12.951C9.16212 12.9512 9.16189 12.9514 9.16173 12.9516C9.16113 12.9522 9.16051 12.9528 9.15988 12.9534C9.15985 12.9534 9.15985 12.9535 9.15981 12.9535C9.14942 12.9636 9.1389 12.9734 9.12814 12.983C9.04906 13.0535 8.96097 13.1085 8.86784 13.1478C8.86751 13.1479 8.86725 13.1481 8.86692 13.1482C8.86655 13.1483 8.86626 13.1485 8.86589 13.1486C8.75333 13.196 8.62974 13.2222 8.49998 13.2222Z"/></svg>
                    Download My Resume
                </a>
            </div>
        </section>
    )
}

export default AboutMe;