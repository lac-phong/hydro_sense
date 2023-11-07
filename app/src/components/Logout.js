import { GoogleLogout } from "@leecheuk/react-google-login";
import React from "react";

const CLIENT_ID = "274329865046-8bmr8o2mtil4qr13ttj0gc8ln6v6u5va.apps.googleusercontent.com";

function Logout({ setUserName, setSpreadsheetInfo, spreadsheetInfo }) {
  const onSuccess = () => {
    console.log("Log out successful!");
    setUserName("");
    setSpreadsheetInfo({ ...spreadsheetInfo, name: "", id: "" })
  };
  const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ", res);
  };

  return (
    <GoogleLogout
      clientId={CLIENT_ID}
      buttonText={"Logout"}
      onLogoutSuccess={onSuccess}
    />
  );
}

export default Logout;
