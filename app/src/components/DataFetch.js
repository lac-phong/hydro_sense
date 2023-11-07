import { get, ref } from "firebase/database";
import { useEffect, useState, useContext } from "react";
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker, DatePicker } from '@mui/x-date-pickers';
import { database } from "../../config/firebaseConfig";
import { SpreadsheetContext } from "../components/SpreadsheetContext";

dayjs.extend(customParseFormat)

export default function DataFetch() {
  
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [testData, setData] = useState([]);
  const { spreadsheetInfo } = useContext(SpreadsheetContext)

  const CLIENT_ID = "274329865046-8bmr8o2mtil4qr13ttj0gc8ln6v6u5va.apps.googleusercontent.com";
  const API_KEY = "AIzaSyCScwxcDw0WuEaaG2gYW5oho8UXQazOnRY";
  const SCOPES = "https://www.googleapis.com/auth/spreadsheets";

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
  
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(database, "test_data");
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const flattenedData = [];

          // Flatten the data structure
          for (const date in data) {
            for (const entryId in data[date]) {
              const entry = data[date][entryId];
              flattenedData.push({
                date,
                ...entry,
              });
            }
          }

          console.log("Flattened data:", flattenedData); // Log flattened data
          setData(flattenedData);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function updateSpreadsheet() {

    var accessToken = gapi.auth.getToken().access_token;

    var labels = ['Date', 'Time', 'Temperature', 'Humidity'];

    const selectedDateStr = dayjs(selectedDate).format('YYYY-MM-DD');
    const selectedTimeStr = dayjs(selectedTime, 'HH:mm:ss').format('HH:mm:ss');

    console.log("Selected date " + selectedDate)
    console.log("Selected time " + selectedTime)

    let filteredData = testData
  
    // Transform test_data into the required format
    if ((selectedDate != null) && (selectedTime != null)) {
      filteredData = testData.filter(item => item.date >= selectedDateStr && item.time >= selectedTimeStr);
      console.log(selectedDateStr)
      console.log(selectedTimeStr)
      console.log(testData)
    }
    var values = filteredData.map(data => [data.date, data.time, data.temperature, data.humidity]);
  
    values.unshift(labels)

    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetInfo.id}/values/Sheet1!A1:D${testData.length + 1}?valueInputOption=USER_ENTERED`, {
      method: "PUT",
      headers: new Headers({
        'Authorization': 'Bearer ' + accessToken,
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        "range": "Sheet1!A1:D" + (testData.length + 1),
        "majorDimension": "ROWS",
        "values": values
      })
    })
    .then((res) => {
      console.log(res)
      if (!res.ok) {
        return res.text().then(text => { throw new Error(`Error: ${res.status}, ${text}`); });
      }
      return res.json();
    })
    .then(data => {
      console.log('Spreadsheet updated:', data);
      // Add further logic or set state to handle successful update
    })
    .catch(error => {
      console.error('Error updating spreadsheet:', error);
      // Handle the error or show a message to the user
    });
  };
  

  return (
    <div>
      <div className="flex flex-col items-center">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="items-center justify-center mb-5">
            <button className='bn54' onClick={updateSpreadsheet}>
              <span class="bn54span">UPDATE SPREADSHEET</span>
            </button>
          </div>
          <div className="flex w-full justify-center">
            <div className="w-1/2 mx-5">
              <DatePicker label="Select from date" value={selectedDate} onChange={(newDate) => setSelectedDate(newDate)}/>
            </div>
            <div className="w-1/2 mx-5">
              <TimePicker label="Select from time" value={selectedTime} onChange={(newTime) => setSelectedTime(newTime)}/>
            </div>
          </div>
        </LocalizationProvider>
      </div>
    </div>
  );
}
