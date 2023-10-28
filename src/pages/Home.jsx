import React from "react";
import Particles from "react-particles";
import Socialicons from "../components/Socialicons";
import Layout from "../components/Layout";
import database from '../data/db/database';
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

/*
Gotta learn the concept of API's in React using this mock and axios to share between modules
*/
function Home(){
  const information=database.information;

  const particlesInit = useCallback(async engine => {
      console.log(engine);
     
      await loadSlim(engine);
  }, []);
  
  const particlesLoaded = useCallback(async container => {
      await console.log(container);
  }, []);

  return (
    <Layout>
      <div className="mi-home-area mi-padding-section">
        {/* <Particles className="mi-home-particle" /> */}

        <Particles className="mi-home-particle"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#000000",
                    },
                    // z_index : -1
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 5,
                        },
                        repulse: {
                            distance: 200,
                            duration: 2.4,
                        },
                    },
                },
                particles: {
                    color: {
                        // value: "#f3ca20",
                        value: "#24A0ED",
                    },
                    links: {
                        // color: "#f3ca20",
                        value: "#24A0ED",
                        distance: 150,
                        enable: true,
                        opacity: 0.3,
                        width: 1,
                    },
                    move: {
                        direction: "right",
                        enable: true,
                        outModes: {
                            // default: "bounce",
                        },
                        random: true,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 180,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        >
        </Particles>
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
