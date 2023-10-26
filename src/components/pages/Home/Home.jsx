import React, {  useState } from "react";
import "../Home/Home.css";
import Navbar from "../../Navbar/Navbar";
import Button from "../../Button/Button";
import FormInput from "../../Form-Input/Form-Input";

export default function Home() {

  
  return (
    <div className="home">
      <Navbar />
      
      <form>
        <FormInput label='Username' placeholder='username' />
        <FormInput label='Firt Name' placeholder='first name' />
        <FormInput label='Last Name' placeholder='last name' />
        <FormInput label='Password' placeholder='password' />

        <Button type="submit" children="Submit" variant="secondary" />
      </form>

    </div>
  );
}
