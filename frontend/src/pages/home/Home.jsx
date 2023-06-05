import "./Home.css";

const Home = () => {
    return (
        <div className="body">
            <section className="header">
                <nav>
                    <img src="src/assets/UniversityLogo.png" alt="logo" className="logo"/>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="/login-and-student-registration">LogIn And Registration</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </nav>
            </section>
        </div>
    );
}

export default Home;