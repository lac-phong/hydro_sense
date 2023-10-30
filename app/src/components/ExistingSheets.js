import useDrivePicker from 'react-google-drive-picker'


function ExistingSheets() {

    const [openPicker, data] = useDrivePicker()

    const handleOpenPicker = () => {
      openPicker({
        clientId:"932982470284-p2h35mousm7nd68pdhrcfa8pqnjuuak6.apps.googleusercontent.com",
        developerKey:"AIzaSyCgEfFbD1Ure7Z7TswYc4c-wyVnFy591R8",
        viewId:"SPREADSHEETS",
       // token:"ya29.a0AfB_byAakIjIPZQszEl7uUHrOOGeOwypIS4m-cy4aaeph_xf71hKyWbiKBMu0JjYlBI3Dmt9I3giLoNp-Pk6Ug1uE5ShSTdTzPA9POIIJPkb4W1FQ8hw8cqQM5EKKH5kThijzYn-fwrepTWdiUTIIsWAE3H7jgrXB1fBaCgYKAacSARISFQGOcNnCHxLLX0Omi5FqI422caFVew0171",
        showUploadView: true,
        showUploadFolders: true,
        supportDrives: true,
        multiselect: true,
        callbackFunction: (data) => { 
          console.log(data);
        }
      })
    }

    return (
  
        <button className='custom-button'><span className='about-text' onClick={() => handleOpenPicker()}>EDIT EXISTING SHEET</span></button>
    
  )
}

export default ExistingSheets