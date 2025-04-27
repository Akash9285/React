import React, { useState } from "react";
import "./form.css"


function Form1(){
    const [name , setName]=useState("");
    const [email , setEmail]=useState("");
    const [phone , setPhone]=useState("");
    const [address , setAddress]=useState("");
    const [image , setImage]=useState([]);

    const handleSubmit = (e)=> {
        e.preventDefault();

        console.log("Name is : " ,name)
        console.log("Email is : " ,email)
        console.log("Phone Number is : ", phone)
        console.log("Address is : " ,address)
        console.log("Iamge is : " ,image)
    }



    return(
        <div className="container">
            <div className="box">
             <h3 >Register</h3>
            <form onSubmit={handleSubmit}>
             <div className="enrty">
             <label htmlFor="name" >Enter Your name </label>
             <br></br>
             <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}></input>

             </div><br></br>
             <div className="enrty">
             <label htmlFor="email" >Enter Your email</label>
             <br></br>
             <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
             </div><br></br>

             <div  className="enrty">
             <label htmlFor="phone" >Enter Your phone</label>
             <br></br>
             <input type="tel" value={phone} onChange={(e) =>{setPhone(e.target.value)} }></input> 
             </div><br></br>

             <div  className="enrty">
             <label htmlFor="address" >Enter Your address</label>
             <br></br>
             <input type="address" value={address} onChange={(e) =>{setAddress(e.target.value)} }></input>
             </div><br></br>

             <div  className="enrty">
             <label htmlFor="image" >Upload your image</label>
             <br></br>
             <input type="files" value={File} onChange={(e) => {setImage(e.target.value)} }></input>
             </div>
             <br></br>
             <button className="sub">Submit</button>

            </form>
        </div>
        </div>
    )
}
export default Form1;