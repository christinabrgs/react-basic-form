import React, {  useState } from "react";
import "./Home.css";
import Navbar from "../../Navbar/Navbar";
import Button from "../../Button/Button";
import FormInput from "../../Form-Input/Form-Input";

export default function Home() {
  
  function handleSubmit (e) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    console.log(formData)

    for(let [name, value] of formData.entries()) {
    console.log({name, value})
    }
  }
  
  return (
    <div className="home">
      <Navbar />
      
      <form onSubmit={handleSubmit}>
        <FormInput name='Username' placeholder='username' />
        <FormInput name='Firt Name' placeholder='first name' />
        <FormInput name='Last Name' placeholder='last name' />
        <FormInput name='Message' placeholder='password' />

        <Button type="submit" children="Submit" variant="secondary" />
      </form>

    </div>
  );
}
