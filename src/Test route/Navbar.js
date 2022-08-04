import React from 'react'
import './Navbar.css'
import { NavLink, Link} from 'react-router-dom'
//import Data from '../MOCK_DATA.json'
import Values from './Values'



export default function Navbar(){
 const [searchText, setSearchText] = React.useState([])
 const [openSearch, setOpenSearch] = React.useState(false)

 


 function manageSearch(event){
     const searchWord = event.target.value
     const filteredData = Values.filter(value => {
         return value.name.toLowerCase().includes(searchWord.toLowerCase())
     })
     if(searchWord === ""){
         setSearchText([])
     }else{
         setSearchText(filteredData)

     }
 }
 let width = window.innerWidth
 console.log(width)

 function handleToggle(){
     setOpenSearch(prevSearch => !prevSearch)
 }
 


 return(
     <div>
         <nav className="navbar">
             <NavLink to="/" className="link">Home</NavLink>
             <NavLink to="/contact" className="link">Contact</NavLink>
             <NavLink to="/about" className="link">About</NavLink>
             <NavLink to="/settings" className="link">Settings</NavLink>
             {width > 915 &&

             <form className="searchbar">
                 <input type="text" placeholder="search" onChange={manageSearch}/>
                 <button className="input-button">search</button>
             </form> 
             }
             
         </nav>
         {searchText.length !== 0 && 
         <div className="data-box">
             {searchText.map(val => {
                 return(<div>
                     <Link to={val.url} className="box-values">{val.name}</Link>
                 </div>)
             })}</div>}
        


     </div>
 )
}