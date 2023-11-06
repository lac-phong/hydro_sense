import React, { useEffect, useContext } from 'react'
import { SpreadsheetContext } from './SpreadsheetContext';


export default function CreateButton({ name, userName }) {
    const { spreadsheetInfo, setSpreadsheetInfo } = useContext(SpreadsheetContext)

    const CLIENT_ID = "274329865046-8bmr8o2mtil4qr13ttj0gc8ln6v6u5va.apps.googleusercontent.com";
    const API_KEY = "AIzaSyCScwxcDw0WuEaaG2gYW5oho8UXQazOnRY";
    const SCOPES = "https://www.googleapis.com/auth/drive";

    useEffect(() => {
      async function loadGapiScript() {
        const gapi = await import('gapi-script').then((pack) => pack.gapi);
        gapi.load('client:auth2', start);
      }
  
      function start() {
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          scope: SCOPES
        });
      }
  
      loadGapiScript();
    }, [API_KEY, CLIENT_ID, SCOPES]);

    function createFile() {
        var accessToken = gapi.auth.getToken().access_token;
        fetch('https://sheets.googleapis.com/v4/spreadsheets', {
        method: "POST",
        headers: new Headers({
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            "properties": {
            "title": name
            }
        })
        }).then( (res) => {
        return res.json();
        }).then( function(val) {
        setSpreadsheetInfo({ ...spreadsheetInfo, name: val.properties.title, id: val.spreadsheetId })
        window.open("https://docs.google.com/spreadsheets/d/" + val.spreadsheetId + "/edit", "_blank");
        });
    }  
    return(
      <button className='custom-button' onClick={() => createFile()}>CREATE NEW SPREADSHEET</button>
  );
}