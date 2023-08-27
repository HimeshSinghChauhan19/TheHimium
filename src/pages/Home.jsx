import React from "react";
import Particles from "react-particles";
import Socialicons from "../components/Socialicons";
import Layout from "../components/Layout";
import database from '../data/db/database';

/*
Gotta learn the concept of API's in React using this mock and axios to share between modules
*/
function Home(){
  const information=database.information;


  return (
    <Layout>
      <div className="mi-home-area mi-padding-section">
        <Particles className="mi-home-particle" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="mi-home-content">
                <h1>
                  Hi, This Is <span className="color-theme">Himesh Singh Chauhan</span>
                </h1>
                <p>{information.aboutContent1}<br/>{information.aboutContent2}</p>
                <Socialicons bordered />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
