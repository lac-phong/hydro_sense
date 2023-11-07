import React, { useEffect, useContext } from 'react'
import { SpreadsheetContext } from './SpreadsheetContext';


export default function CreateButton({ name }) {
    const { spreadsheetInfo, setSpreadsheetInfo } = useContext(SpreadsheetContext)

    const CLIENT_ID = "274329865046-8bmr8o2mtil4qr13ttj0gc8ln6v6u5va.apps.googleusercontent.com";
    const API_KEY = "AIzaSyCScwxcDw0WuEaaG2gYW5oho8UXQazOnRY";
    const SCOPES = "https://www.googleapis.com/auth/drive";

    useEffect(() => {
      async function loadGapiScript() {
        const gapi = await import('gapi-script').then((pack) => pack.gapi);
        gapi.load('client:auth2', start);
      }

      async function refreshToken() {
        const authInstance = gapi.auth2.getAuthInstance();
        let REFRESH_TOKEN
        authInstance.grantOfflineAccess()
          .then((res) => {
            console.log(res);
            // Save the refresh token
            this.data.refreshToken = res.code;
            REFRESH_TOKEN = res.code;
          });
        const response = await fetch('https://oauth2.googleapis.com/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({
            'refresh_token': REFRESH_TOKEN,
            'client_id': CLIENT_ID,
            'grant_type': 'refresh_token'
          })
        });
       
        const data = await response.json();
       
        // Update the token
        gapi.auth.setToken({
          access_token: data.access_token,
          expires_at: Date.now() + data.expires_in * 1000
        });
      }
    
      function start() {
        const authInstance = gapi.auth2.getAuthInstance();
        // Check if the token is expired
        if (gapi.auth.getToken().expires_at < Date.now()) {
          // If the token is expired, refresh it
          refreshToken();
        }
        if (!authInstance) {
          gapi.auth2.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            scope: SCOPES
          }).catch((error) => {
            console.error('Error initializing gapi client:', error);
          });
        }
      }
    
      loadGapiScript();
    }, [API_KEY, CLIENT_ID, SCOPES]);

    function createFile() {
        var accessToken = gapi.auth.getToken().access_token;
        console.log(accessToken)
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
      <button className='bn54' onClick={() => createFile()}>
        <span class="bn54span">CREATE NEW SPREADSHEET</span>
      </button>
  );
}