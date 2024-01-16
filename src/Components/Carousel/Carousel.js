import './Carousel.scss'
import bootstrapIcon from '../../assets/carousel/bootstrap.svg'
import cssIcon from '../../assets/carousel/css3-alt.svg'
import figmaIcon from '../../assets/carousel/figma.svg'
import gitIcon from '../../assets/carousel/git-alt.svg'
import htmlIcon from '../../assets/carousel/html5.svg'
import javaScriptIcon from '../../assets/carousel/js.svg'
import nodeIcon from '../../assets/carousel/node.svg'
import reactIcon from '../../assets/carousel/react.svg'
import sassIcon from '../../assets/carousel/sass.svg'
import expressIcon from '../../assets/carousel/express.svg'
import npmIcon from '../../assets/carousel/npm.svg'

function Carousel() {

    const logos = [
        bootstrapIcon,
        cssIcon,
        figmaIcon,
        gitIcon,
        htmlIcon,
        javaScriptIcon,
        nodeIcon,
        reactIcon,
        sassIcon,
        expressIcon,
        npmIcon,

        bootstrapIcon,
        cssIcon,
        figmaIcon,
        gitIcon,
        htmlIcon,
        javaScriptIcon,
        nodeIcon,
        reactIcon,
        sassIcon,
        expressIcon,
        npmIcon
    ];

    return (
        <div className="logos">
            <div className="logos-slide">
                {logos.map((logo, index) => (
                    <img key={index} src={logo} alt={`Logo ${index + 1}`} />
                ))}
                {logos.map((logo, index) => (
                    <img key={`duplicate-${index}`} src={logo} alt={`Logo ${index + 1}`} />
                ))}
            </div>
        </div>
    );
}

export default Carousel;