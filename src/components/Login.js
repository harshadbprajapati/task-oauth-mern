import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import App from "../App";

function Login(props) {
  const clientId = process.env.REACT_APP_CLIENT_ID;

  // to remove the error 'pop-up-closed-by-user' we need to install gapi package
  // which is used to resolve this error.
  // In older version ,program used to run using 'npm i react-google-login'
  // but in new version it shows error so gapi package is needed.
  // npm i gapi-script

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({ clientId });
    });
  }, []);

  const responseGoogle = (response) => {
    console.log(response.profileObj);

    if (response.googleId === undefined) {
      App = { response };
    }
    window.localStorage.setItem(response.googleId, "google id");
    props.response(response);
  };
  return (
    <div>
      <div>
        <h3>Login Using Google</h3>
      </div>
      <div>
        <GoogleLogin
          clientId={process.env.REACT_APP_CLIENT_ID}
          buttonText="Login using Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
}

export default Login;
