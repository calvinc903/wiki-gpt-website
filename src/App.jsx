import './App.css'
import { useAuth0 } from "@auth0/auth0-react";
import FashionGPT from "./components/Demo/FashionGPT";
import welcomeImg from './welcome.png';
import bgImg from './bg.png';
import titleImg from './WikiHowGPT.png';

function App() {
    const { user, error, isLoading } = useAuth0()
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    if (true) {
        return (
            <div className="app-container">

                <div className="background-image">
                    <img src={bgImg} alt="Background" />
                </div>

                <div className="content">
                    <div className="title-img">
                        <img src={titleImg} alt="Title" />
                    </div>


                    <div className="label">
                        <img className="welcome" src={welcomeImg} alt="Welcome" />
                        <div className="message-img">
                            <h3>Enter your prompt here! {"(ex: 'Going to skateboard')"}</h3>
                            <FashionGPT />

                        </div>
                    </div>



                    <br />
                </div>
            </div>
        );
    }
    return (
        <div>
            <p>
                Welcome to Fashion-GPT, please LOGIN first for the service!
            </p>
        </div>
    );
}
export default App;
