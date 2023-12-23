import "./HomePage.scss";
import Header from "../../Components/Header/Header";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills/Skills";

function HomePage() {

    return (
        <>
            <Header />
            <main>
                <Projects />
                <Skills />
            </main>
        </>
    )
}

export default HomePage;