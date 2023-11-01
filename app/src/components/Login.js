import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = "393912769727-ed06sq3ue163l2e77o4lln6o77eis33d.apps.googleusercontent.com";

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
                isSignedIn = {true}
            />
        </div>
    )

}