import React from 'react'
import Navbar from './Navbar'
import './SearchView.css'

export default function SearchView(props){
 let word = `You are searching for ${props.searchText}`
 const styles = {
     backgroundColor: props.darkMode? "#262626" : "white",
     color: props.darkMode? "white" : "#262626"
 }

    return(
        <div style={styles} className="searchView">
            <Navbar/>
            <h2>{word}</h2>

        </div>
    )
}