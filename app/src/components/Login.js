import React, { useEffect } from 'react'
import { GoogleLogin } from 'react-google-login';

const clientId = "274329865046-8bmr8o2mtil4qr13ttj0gc8ln6v6u5va.apps.googleusercontent.com";

export default function Login({setUserName}) {
    
    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ",res.profileObj);
        setUserName(res.profileObj.name);
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res);
    }

    return(
        <div id ="signInButton">
            <GoogleLogin
                clientId = {clientId}
                buttonText = "Login"
                onSuccess = {onSuccess}
                onFailure = {onFailure}
                cookiePolicy = {'single_host_origin'}
                isSignedIn = {false}
            />
        </div>
    )

}