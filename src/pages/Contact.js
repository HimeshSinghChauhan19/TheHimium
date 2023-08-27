import React from "react";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import Socialicons from "../components/Socialicons";

/*
Currently I am just gonna leave this part like this only but I am thinking that later I may extend this further with some functionalities
like that of Google map generation or something like that, or even a live location tracker, maybe or something interesting...
*/
function Contact(){
  return (
    <Layout>
      <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Contact"/>
          <h6>I can best be reached through <a href="mailto:himeshchauhan10@gmail.com">email</a>.</h6>
          <br></br>
          <Socialicons />

        </div>
      </div>
    </Layout>
  
    
  );
}

export default Contact;
