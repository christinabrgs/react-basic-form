import React from "react";
import "../Home/Home.css";
import Navbar from "../../Navbar/Navbar";
import Button from "../../Button/Button";

export default function Home() {
  return (
    <div className="home">
      <Navbar />

      <Button type="submit" children="Submit" variant='secondary'/>
    </div>
  );
}
