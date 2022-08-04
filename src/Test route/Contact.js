import React from 'react'
import Navbar from './Navbar'
import './Contact.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import load1 from '../Image/25.gif'

export default function AltContact(props){
 const [name, setName] = React.useState("")
 const [email, setEmail] = React.useState("")
 const [description, setDescription] = React.useState("")
 const [bool, setBool] = React.useState(false)

 function handleName(event){
     setName(event.target.value)
 }
 function handleEmail(event){
     setName(event.target.value)
 }
 function handleDescription(event){
     setName(event.target.value)
 }

  
 async function handleSubmit(event){
     event.preventDefault()
     try {
         let data = {
             name,
             email,
             description
         }
        setBool(true)
        const res = await axios.post('/contact', data);
        if(name.length === 0 || email.length === 0 || description.length === 0){
            //setBanner(res.data.msg)
            toast.error(res.data.msg)
            setBool(false)
        }else if(res.status === 200){
            //setBanner(res.data.msg)
            toast.success(res.data.msg)
            setBool(false)
        }
         
     } catch (error) {
         console.log(error)
         
     }
 
     
 }

    const styles = {
        backgroundColor: props.darkMode ? "#262626": "white",
        color: props.darkMode ? "white" : "black"
    }
    return(
        <div style={styles} className="contact-section ">
            <Navbar/>
            
            <form className="contacts" onSubmit={handleSubmit} style={styles}>
            
            <h3 className="contact-heading">Drop us a line</h3>

            <input type="text"  className="name" placeholder="name"  onChange={handleName} style={styles}/>
            <input type="text" className="email " placeholder="email"  onChange={handleEmail} style={styles}/>
            <textarea className="description "placeholder="Your message!" onChange={handleDescription} style={styles}/>
            <button className="bg-primary text-white contact-button" type="submit" >Submit
            {bool? (<b className="load">
                <img className="loading-image" src={load1} alt="image not responding"/>
            </b>): ("")}</button>
            </form>

            <h2>{description}</h2>


        </div>
    )
}