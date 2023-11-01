import { GoogleLogout } from 'react-google-login'
import React from 'react';


const clientId = "393912769727-ed06sq3ue163l2e77o4lln6o77eis33d.apps.googleusercontent.com";


function Logout({setUserName}) {
    const onSuccess = () => {
        console.log("Log out successful!");
        setUserName("")
    }
    const onFailure = (res) =>{
        console.log("LOGIN FAILED! res: ", res);
    }

    return (
        <GoogleLogout
            clientId = {clientId}
            buttonText = {"Logout"}
            onLogoutSuccess = {onSuccess}
        />
    )
}

export default Logout;