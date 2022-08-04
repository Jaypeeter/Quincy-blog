import React from 'react'
import Navbar from './Navbar'
import './About.css'
import Image1 from '../../src/Image/download.jfif'
import Image2 from '../../src/Image/download (1).jfif'
import Image3 from '../../src/Image/download (2).jfif'

export default function About(props){
    const styles = {
        backgroundColor: props.darkMode ? "#262626": "white",
        color: props.darkMode ? "white" : "black"
    }
    return(
        <div className=" about-section" style={styles}>
              <Navbar/>

              <div className="specialties">
            <h3>Our specialties</h3>
            <ul>
                <li>Web design</li>
                <li>Programming</li>
                <li>UI/Ux design</li>
                <li>Computer graphics design</li>
                <li>Banner designs</li>
                
            </ul>

              </div>
              <br/>

              <div>
                  <h2 className="project-text" >Our projects</h2>
                  <div  className="image-flex">

                  <div className="image-1">
                      <img src={Image1} alt="ist project"/>

                  </div>
                  <div className="image-2"> 
                      <img src={Image2} alt="2nd project"/>

                  </div>
                  </div>
                  <br/>
                  <br/>
                  <div className="image-3" alt="3rd project">
                      <img src={Image3}/>

                  </div>
              </div>

        </div>
    )
}