import React, { useState } from "react";
import '../../style.css'
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [userName,setUserName] = useState("") 
    const [formError,setFormError] = useState("")
    const navigate = useNavigate()

    const handleDisplayName = () => {
   if  (!userName) {
    setFormError("Please enter your name")
   }
   else {
        localStorage.setItem("displayName", userName)
        navigate('./display') 
   }
   
    }

    return (
        <>
          
                <div className="container">
                    <div className="form-container">
                    <div>
                        <h5>Hi,PLEASE ENTER YOUR NAME</h5>
                        <input
                            className="input-field "
                            placeholder="Write Your Name"
                            type="text"
                            name="name"
                            onChange={(e)=>setUserName(e.target.value)}

                        />
                        </div>
                        {!userName && formError && <span className="text-danger">{formError}</span>}
                        <button className="add-btn" onClick={handleDisplayName} >Ok</button>
                    </div>

                </div>
          
        </>
    )
}

export default HomePage;