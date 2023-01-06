import React from "react";
import { GoogleLogout } from "react-google-login";
import App from "../App";
function Logout(props) {
  const clientId = process.env.REACT_APP_CLIENT_ID;

  const responseGoogle = (response) => {
    console.log("logged out..!");
    props.response(response);
    window.localStorage.clear();
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        onLogoutSuccess={responseGoogle}
        buttonText="Logout"
      />
    </div>
  );
}

export default Logout;
