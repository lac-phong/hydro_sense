import React, { useContext } from 'react'
import useDrivePicker from 'react-google-drive-picker'
import { SpreadsheetContext } from './SpreadsheetContext';

function ExistingSheets() {

    const [openPicker, data] = useDrivePicker()
    const { spreadsheetInfo, setSpreadsheetInfo } = useContext(SpreadsheetContext);

    const handleOpenPicker = () => {
      openPicker({
        clientId:"274329865046-8bmr8o2mtil4qr13ttj0gc8ln6v6u5va.apps.googleusercontent.com",
        developerKey:"AIzaSyCScwxcDw0WuEaaG2gYW5oho8UXQazOnRY",
        viewId:"SPREADSHEETS",
        showUploadView: true,
        showUploadFolders: true,
        supportDrives: true,
        multiselect: false,
        callbackFunction: (data) => { 
          console.log(data);
          if (data && data.docs && data.docs.length > 0) {
            setSpreadsheetInfo({ ...spreadsheetInfo, name: data.docs.at(0).name, id: data.docs.at(0).id })
            console.log(data.docs.at(0).name)
            console.log(data.docs.at(0).id)
            window.open("https://docs.google.com/spreadsheets/d/" + data.docs.at(0).id + "/edit", "_blank");
          }
        }
      })
    }

    return (
      <button className='bn54' onClick={() => handleOpenPicker()}>
        <span class="bn54span">EDIT EXISTING SHEET</span>
      </button> 
  )
}

export default ExistingSheets