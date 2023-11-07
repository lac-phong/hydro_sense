import React, { useEffect } from "react";
import { GoogleLogin } from "@leecheuk/react-google-login";

const CLIENT_ID = "274329865046-8bmr8o2mtil4qr13ttj0gc8ln6v6u5va.apps.googleusercontent.com";
const API_KEY = "AIzaSyCScwxcDw0WuEaaG2gYW5oho8UXQazOnRY";
const SCOPES = "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/spreadsheets";

export default function Login({ setUserName }) {
  useEffect(() => {
    async function loadGapiScript() {
      const gapi = await import('gapi-script').then((pack) => pack.gapi);
      gapi.load('client:auth2', start);
    }
  
    function start() {
      if (!gapi.auth2.getAuthInstance()) {
        gapi.auth2.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          scope: SCOPES
        });
      }
    }
  
    loadGapiScript();
  }, [API_KEY, CLIENT_ID, SCOPES]);
  

  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    setUserName(res.profileObj.name);
  };

  const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ", res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}
