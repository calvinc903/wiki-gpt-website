import "./landingPage.css";
import {useAuth0} from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
    const { loginWithRedirect } = useAuth0();
    const { user } = useAuth0()
    const navigate = useNavigate();

    React.useEffect(() => {
        console.log(user);
        if (user) {
            navigate("/prompt");
        }
    }, [user, navigate]);

    return (
        <div style={{display: "flex", flexDirection: "row", height: "100%"}}>
            <div style={{display: "flex", flex: 0.6, background: "#6E1EAD"}}>
                <div style={{flexGrow: 1, display: "flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                    <h1 className="LandingPageTitle">Fashion-GPT</h1>
                    <h3 className="LandingPageSubheading">AI Generation Fashion</h3>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="173" height="1024" viewBox="0 0 173 1024" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 1024L25 1014.04C51 1004.09 101 984.178 119 964.267C137 944.356 123 923.022 97 903.111C72 883.2 36 863.289 29 843.378C22 823.467 43 803.556 51 783.644C58 762.311 51 742.4 54 722.489C58 702.578 72 682.667 61 662.756C51 642.844 15 622.933 25 603.022C36 581.689 94 561.778 101 541.867C108 521.956 65 502.044 40 482.133C15 462.222 7 442.311 29 420.978C51 401.067 101 381.156 97 361.244C94 341.333 36 321.422 33 301.511C29 281.6 79 261.689 112 240.356C144 220.444 159 200.533 133 180.622C108 160.711 43 140.8 18 120.889C-7 100.978 7 79.6444 11 59.7333C15 39.8222 7 19.9111 4 9.95551L0 0H173V9.95551C173 19.9111 173 39.8222 173 59.7333C173 79.6444 173 100.978 173 120.889C173 140.8 173 160.711 173 180.622C173 200.533 173 220.444 173 240.356C173 261.689 173 281.6 173 301.511C173 321.422 173 341.333 173 361.244C173 381.156 173 401.067 173 420.978C173 442.311 173 462.222 173 482.133C173 502.044 173 521.956 173 541.867C173 561.778 173 581.689 173 603.022C173 622.933 173 642.844 173 662.756C173 682.667 173 702.578 173 722.489C173 742.4 173 762.311 173 783.644C173 803.556 173 823.467 173 843.378C173 863.289 173 883.2 173 903.111C173 923.022 173 944.356 173 964.267C173 984.178 173 1004.09 173 1014.04V1024H0Z" fill="#202325"/>
            </svg>
            </div>
            <div style={{display: "flex", flex: 0.4, background: "#202325", flexDirection: "column"}}>
                <div className="LoginButton">
                    <button type = "button" className="Button" onClick={() => loginWithRedirect()}>Login</button>
                </div>
            </div>
        </div>
    )
}
export default LandingPage;
