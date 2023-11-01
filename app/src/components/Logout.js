import { GoogleLogout } from 'react-google-login'
import React from 'react';


const clientId = "274329865046-8bmr8o2mtil4qr13ttj0gc8ln6v6u5va.apps.googleusercontent.com";


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