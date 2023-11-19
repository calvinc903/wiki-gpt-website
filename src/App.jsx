import './App.css'
import {useAuth0} from "@auth0/auth0-react";
import FashionGPT from "./components/Demo/FashionGPT";

function App() {
    const { user, error, isLoading } = useAuth0()
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    if (user) {
        return (
            <div>
                <h1>Welcome {user.name}!</h1>
                <br />
                <h3>Enter your prompt here! {"(ex: 'Going to skateboard')"}</h3>
                <FashionGPT />
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
