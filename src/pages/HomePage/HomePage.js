import "./HomePage.scss";
import Header from "../../Components/Header/Header";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills/Skills";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Education from "../../Components/Education/Education";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";

function HomePage() {

    return (
        <>
            <Header />
            <main>
                <Projects />
                <Skills />
                <AboutMe />
                <Education />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default HomePage;