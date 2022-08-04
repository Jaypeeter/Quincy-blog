import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAngleLeft, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons'
import './Settings.css'
import { Link } from 'react-router-dom'


export default function Settings({darkMode, setDarkMode}){
 const [popup,setPopUp] = React.useState(false)

 

 const styles= {
     backgroundColor: darkMode? "#262626" : "white",
     color: darkMode? "white" : "black"

 }

 function handleFlip(){
     setPopUp(prevPop => !prevPop)
 }

 function handleToggle(){
     setDarkMode(prevMode => !prevMode)
 }

 console.log(darkMode)


    return(
        <div style={styles} className="settings-section">
            <Link to="/">
                <FontAwesomeIcon icon={faAngleLeft} className="backangle" style={styles} ></FontAwesomeIcon>
                </Link>
            <div className="darkmode-section">

            <p>{darkMode? "Turn on LightMode": "Turn on DarkMode"}</p>
            {darkMode? 
            <FontAwesomeIcon onClick={handleToggle} icon={faToggleOn} />:
            <FontAwesomeIcon onClick={handleToggle} icon={faToggleOn} />

            }
            </div>
            <div className="darkmode-section">

            <p>{popup? "Turn off Notifications": "Turn on Notifications"}</p>
            {popup? 
            <FontAwesomeIcon onClick={handleFlip} icon={faToggleOn} />:
            <FontAwesomeIcon onClick={handleFlip} icon={faToggleOff} />

            }
            </div>
            <div style={styles}>

            <Link to="/about" className="about-us" style={styles}>About us</Link>

            
            </div>
        </div>
    )
}