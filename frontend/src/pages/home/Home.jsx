import HomeNavigationBar from "../../components/shared/navigation/HomeNavigationBar.jsx";
import NavigationLinks from "../../components/shared/navigation/NavigationLinks.js";

const Home = () => {
    return (
        <HomeNavigationBar
            links={NavigationLinks("home")}
            backgroundImage="login.jpg"
        >
            <h1>Home</h1>
        </HomeNavigationBar>
    );
}

export default Home;