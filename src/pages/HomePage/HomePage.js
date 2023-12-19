import "./HomePage.scss";
import Header from "../../Components/Header/Header";
import Projects from "../../Components/Projects/Projects";

function HomePage() {

    return (
        <>
            <Header />
            <main>
                <Projects />
            </main>
        </>
    )
}

export default HomePage;