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
  
    // Transform test_data into the required format
    const filteredData = testData.filter(item => item.date >= selectedDateStr && item.time >= selectedTimeStr);
    console.log(selectedDateStr)
    console.log(selectedTimeStr)
    console.log(testData)
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
      if (!res.ok) {
        throw new Error('Network response was not ok');
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
      <button className='custom-button' onClick={updateSpreadsheet}>UPDATE SPREADSHEET</button>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Select data from date" value={selectedDate} onChange={(newDate) => setSelectedDate(newDate)}/>
        <TimePicker label="Select data from time" value={selectedTime} onChange={(newTime) => setSelectedTime(newTime)}/>
      </LocalizationProvider>
    </div>
  );
}
