import './Skills.scss'
import tronLinesImage from '../../assets/images/frontend-illustration.svg'

function Skills() {

    return (
        <section className='skills' id='skills'>
            <h1 className='skills__header'>My Skills</h1>
            <article className='skills__group-wrapper'>
                <div className='skills__subgroup-wrapper'>
                    <div className='skills__box skills__box--frontend'>
                        <h2 className='skills__box__header'>Front-End Development:</h2>
                        <ul className='skills__box__list'>
                            <li className='skills__box__list--item'>HTML5</li>
                            <li className='skills__box__list--item'>CSS3</li>
                            <li className='skills__box__list--item'>JavaScript</li>
                            <li className='skills__box__list--item'>React.js</li>
                            <li className='skills__box__list--item'>Bootstrap</li>
                            <li className='skills__box__list--item'>Sass</li>
                            <li className='skills__box__list--item'>Jest</li>
                            <li className='skills__box__list--item'>Netlify</li>
                        </ul>
                    </div>
                    <div className='skills__box skills__box--backend'>
                        <h2 className='skills__box__header'>Back-End Development:</h2>
                        <ul className='skills__box__list'>
                            <li className='skills__box__list--item'>Node.js</li>
                            <li className='skills__box__list--item'>Express.js</li>
                            <li className='skills__box__list--item'>Knex.js</li>
                            <li className='skills__box__list--item'>MySQL</li>
                            <li className='skills__box__list--item'>Firebase</li>
                            <li className='skills__box__list--item'>Git</li>
                            <li className='skills__box__list--item'>REST API</li>
                            <li className='skills__box__list--item'>Heroku</li>
                        </ul>
                    </div>
                </div>
                <div className='skills__box skills__box--design'>
                    <h2 className='skills__box__header'>UX Design:</h2>
                    <ul className='skills__box__list'>
                        <li className='skills__box__list--item'>Figma</li>
                        <li className='skills__box__list--item'>Illustrator</li>
                        <li className='skills__box__list--item'>Lightroom</li>
                        <li className='skills__box__list--item'>Photoshop</li>
                        <li className='skills__box__list--item'>Premiere Pro</li>
                        <li className='skills__box__list--item'>Blender</li>
                        <li className='skills__box__list--item'>TouchDesigner</li>
                    </ul>
                    <img className='skills__box--design-image' src={tronLinesImage} alt='decorative coding lines'></img>
                </div>
            </article>
        </section>
    )
}

export default Skills;