import React, {useState} from "react";
import './Form-Input.css'


export default function FormInput ({name, placeholder}) {

    // const [username, setUsername] = useState("")
    // console.log(label)

    // function grabValue (e) {
    //     label == 'Username' ? setUsername(e.target.value) : setUsername('')
      
    //   console.log('this is the value', e.target.value)
    // }

    // console.log('this is the state', username)
    

    return (
        <div className="form-input">
        <label htmlFor={name}>{name}</label>

        <input 
        className="input-field" 
        placeholder={placeholder} 
        name={name} 
        type="text" 
        // onChange={grabValue} 
        />

        </div>
    )
}