import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Navbar from './Navbar'
import { Carousel } from 'react-bootstrap'
import Typical from 'react-typical'
import './Styles.css'

import Pic1 from "../../src/Image/pexels-pixabay-87772 (1).jpg"
import Pic2 from "../../src/Image/Webp.net-resizeimage (7).jpg"
import Pic3 from "../../src/Image/Webp.net-resizeimage (8).jpg"
import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons'

export default function Home(props){
 const [memeImages, setMemeImages] = React.useState("")

  async function randomImage() {
    var res = await fetch("https://api.imgflip.com/get_memes")
    var actualData = await res.json();
    console.log(JSON.stringify(actualData))
    var memesArray = actualData.data.memes;
    var randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImages(memesArray[randomNumber].url)

  }
  
    console.log(JSON.stringify("https://api.imgflip.com/get_memes"))

    const text = [
      <p>Lorem ipsum dono Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      Lorem ipsum dono Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      Lorem ipsum dono Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      Lorem ipsum dono Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      Lorem ipsum dono Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla zan pioloe hao ,cingo ooecnosh lkceo no eon osanlcmkmcicef ni vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollisoei jijjaj iej doafoejflduojeo jcap feficps cseopfh; dscisocjo interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.</p>, <p>Ipsum lorem dono Nulla vitae elit libero, a pharetra augue mollis interdum.   Lorem ipsum dono Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      Lorem ipsum dono Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      Lorem ipsum dono Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      Lorem ipsum dono Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    ]
  
 const randomText = Math.floor(Math.random() * text.length)

 const paragraph = text[randomText]


  
     
  

    const styles = {
        backgroundColor: props.darkMode ? "#262626": "white",
        color: props.darkMode ? "white" : "black"
    }
    return(
        <div className=" home-section" style={styles}>
            <Navbar/>
            
            <div className="home-section " style={styles}>
            <h1 className="header-heading">Quincy Blog!</h1>
            <p className="header-text">This blog contains everything you can think about. It bases on all the paths and routes taken to achieve a career path, do not be confused by this alteration of what you would call a language but be iterated by the content that i make in order to protest like a boss in all that he does and then know that you can't really floss but be prepared to face your loss.</p>
            </div>
        <h2 className="bg-primary text-white news-text">
          <Typical 
          loop={Infinity}
          steps={[
            "Trending📰...",
            1000  
          ]
                   }
                   
                    
        />
          </h2>
          

            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Pic3}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Russia declares war against Ukraine</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Pic1}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Elite forces of Ukraine defence</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Pic2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Ukraine to use Evacuation planes</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<br/>
<br/>

<h2 className="news-text">Latest News</h2>
<br/>
<h3 className="news-text" id="sports">Sports</h3>
<img className="news-image" src={memeImages}/>
<div className="news-text">
{paragraph}        
</div>
<button className="btn-primary" onClick={randomImage}>get latest news</button>
<br/>
<h3 className="news-text" id="music">Music</h3>
<img className="news-image" src={memeImages}/>
<div className="news-text">
{paragraph}        
</div>
<button className="btn-primary" onClick={randomImage}>get latest news</button>
<br/>
<h3 className="news-text" id="weather">Weather</h3>
<img className="news-image" src={memeImages}/>
<div className="news-text"> 
{paragraph}        
</div>
<button className="btn-primary" onClick={randomImage}>get latest news</button>
        </div>
    )
}