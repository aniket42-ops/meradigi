import React from "react";
import Navbar from "../../../Navbar";
import Footer from "../../../Footer";
import freelance from "./freelancer.gif";
import "./Freelancer.css"
import { Button } from "react-bootstrap";

const freelancer=()=>{
    return(
        <>
        <Navbar/>
        <img src={freelance} alt="" className="background1"/>
        <h1 className="freelance"> Freelance</h1>
        <Button className="Services">Get Service➡️ </Button>
        <center><h2 className="skills">Skills Category</h2>
        <h4>We are the best freelance platform for finding professionals for your project needs.</h4>
        </center>

        <Footer/>
        </>
    )
}
export default freelancer;