import React, {useState} from "react";
import './Form-Input.css'


export default function FormInput ({label, placeholder}) {

    const [username, setUsername] = useState("")
    console.log(label)
    function grabValue (e) {
        label == 'Username' ? setUsername(e.target.value) : setUsername('')
      
      console.log('this is the value', e.target.value)
    }

    console.log('this is the state', username)
    

    return (
        <div className="form-input">
        <label htmlFor={label}>{label}</label>

        <input 
        className="input-field" 
        placeholder={placeholder} 
        name={label} 
        type="text" 
        onChange={grabValue} 
        />

        </div>
    )
}