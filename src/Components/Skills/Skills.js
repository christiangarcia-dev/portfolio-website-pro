import './Skills.scss'
import tronLinesImage from '../../assets/images/frontend-illustration.svg'

function Skills() {

    return (
        <section className='skills'>
            <h1 className='skills__header'>My Skills</h1>
            <article className='skills__group-wrapper'>
                <div className='skills__subgroup-wrapper'>
                    <div className='skills__box skills__box--frontend'>
                        <h2 className='skills__box__header'>Front-End Development:</h2>
                        <ul className='skills__box__list'>
                            <li className='skills__box__list--item'>HTML</li>
                            <li className='skills__box__list--item'>CSS</li>
                            <li className='skills__box__list--item'>JavaScript</li>
                            <li className='skills__box__list--item'>React</li>
                            <li className='skills__box__list--item'>Bootstrap</li>
                            <li className='skills__box__list--item'>Sass</li>
                        </ul>
                    </div>
                    <div className='skills__box skills__box--backend'>
                        <h2 className='skills__box__header'>Back-End Development:</h2>
                        <ul className='skills__box__list'>
                            <li className='skills__box__list--item'>Node</li>
                            <li className='skills__box__list--item'>Express</li>
                            <li className='skills__box__list--item'>Knex</li>
                            <li className='skills__box__list--item'>MySQL</li>
                            <li className='skills__box__list--item'>Firebase</li>
                            <li className='skills__box__list--item'>Git</li>
                        </ul>
                    </div>
                </div>
                <div className='skills__box skills__box--design'>
                    <h2 className='skills__box__header'>UX Design:</h2>
                    <ul className='skills__box__list'>
                        <li className='skills__box__list--item'>Figma</li>
                        <li className='skills__box__list--item'>Adobe Illustrator</li>
                        <li className='skills__box__list--item'>Lightroom</li>
                        <li className='skills__box__list--item'>Photoshop</li>
                        <li className='skills__box__list--item'>Blender</li>
                        <li className='skills__box__list--item'>TouchDesigner</li>
                    </ul>
                    <img className='skills__box--design-image' src={tronLinesImage}></img>
                </div>
            </article>
        </section>
    )
}

export default Skills;