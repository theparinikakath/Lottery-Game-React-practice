import { useState } from "react";

export default function Form(){
    let [formData,setFormData]=useState({
        fullName: "",
        username: "",
        pass:""
    });

    // let handleNameChange=(event)=>{
    //     // console.log(event.target.value);
    //     setFullName(event.target.value);
    // };
    // let handleUsername=(event)=>{
    //     // console.log(event.target.value);
    //     setUsername(event.target.value);
    // };

    let handleInputChange=(event)=>{
        let fieldName=event.target.name;
        let newValue=event.target.value;
        //console.log(newValue);
        setFormData((currData)=>{
            currData[fieldName]=newValue;
            return {...currData,
                [event.target.name]:event.target.value
            };
        })
    };
    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName:"",
            username:"",
            pass:""
        });
    };
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input placeholder="enter your name" 
            type="text" 
            value={formData.fullName} 
            onChange={handleInputChange}
            id="fullName"
            name="fullName"
            />
        
            <br/>
            <br/>
            <label htmlFor="username">User Name</label>
            <input placeholder="enter username" 
            type="text" 
            value={formData.username} 
            onChange={handleInputChange}
            id="username"
            name="username"
            />
            <label htmlFor="pass">Password</label>
            <input placeholder="enter password" 
            type="text" 
            value={formData.pass} 
            onChange={handleInputChange}
            id="pass"
            name="pass"
            />
            
            <button>Submit</button>
        </form>
    );
}