import React from "react";
import './Form-Input.css'


export default function FormInput ({label, placeholder}) {
    return (
        <div className="form-input">
        <label for={label}>{label}</label>
        <input className="input-field" placeholder={placeholder} name={label} type="text" />
        </div>
    )
}