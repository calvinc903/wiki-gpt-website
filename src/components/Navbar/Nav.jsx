import "./Nav.css";
import {useAuth0} from "@auth0/auth0-react";
import {useEffect} from "react";

function Nav() {
  const { logout, loginWithRedirect } = useAuth0();
  const { user } = useAuth0();

    useEffect(() => {
        console.log(user);
    }, [user]);

  return (
      <div className="navbar">
        <ul style={{display: "flex"}}>
            <div className="title">
                <li><a href="/">FashionGPT</a></li>
                <li><a href="/prompt">Generate</a></li>
                <li><a href="/community">Community</a></li>
            </div>
          <li><a style={{justifyContent: "right"}} onClick={() => loginWithRedirect()}>Log In</a></li>
          <li><a style={{justifyContent: "right"}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out</a></li>
          <li>
              <img src={user?.picture} alt={user?.name} style={{flexGrow: 1, maxHeight: 47, borderRadius: "100%"}} />
          </li>
        </ul>

        {/*<Profile />*/}
      </div>
  );
}

export default Nav;
