import React from "react";
import TrackVisibility from "react-on-screen";
import Sectiontitle from "../components/Sectiontitle";
import Smalltitle from '../components/Smalltitle';
import Layout from "../components/Layout";
import Progress from "../components/Progress";
import Resume from "../components/Resume";
import database from '../data/db/database.js'

// console.log("We must be here..")
// console.log(database)
function Resumes(){
  
  // Manually handling these variables, after manually importing the data from the database file
  const skills=database.skills;
  const educationExperience=database.experience.educationExperience;
  



  return (
    <Layout>
      {/* <h1>This is the resumes...</h1> */}
      <div className="mi-skills-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="My Skills" />
          <div className="mi-skills">
            <div className="row mt-30-reverse">
              {skills.map(skill => (
                <TrackVisibility once className="col-lg-6 mt-30" key={skill.title}>
                  <Progress title={skill.title} percentage={skill.value} />
                </TrackVisibility>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <div className="mt-30"></div>
          <Smalltitle title="Educational Qualifications" icon="book" />
          <div className="mi-resume-wrapper">
            {educationExperience.map(educatonExp => (
              <Resume key={educatonExp.id} resumeData={educatonExp}/>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resumes;
