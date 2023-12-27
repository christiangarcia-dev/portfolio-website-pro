import "./HomePage.scss";
import Header from "../../Components/Header/Header";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills/Skills";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Education from "../../Components/Education/Education";

function HomePage() {

    return (
        <>
            <Header />
            <main>
                <Projects />
                <Skills />
                <AboutMe />
                <Education />
            </main>
        </>
    )
}

export default HomePage;