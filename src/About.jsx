import React from "react";
import web from "../src/images/img4.svg";
import Common from "./Common";

const About = () => {
    return (
        <>
          <Common 
          name="Contact To" 
          imgsrc={web} 
          visit="/contact" 
          btname="Contact Now"
          />
        </>
    );
};

export default About;