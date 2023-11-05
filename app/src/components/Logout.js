import { GoogleLogout } from 'react-google-login'
import React from 'react';


const clientId = "263240818123-57m61ce1f2t8b7if3po22hjigb598ej4.apps.googleusercontent.com";


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