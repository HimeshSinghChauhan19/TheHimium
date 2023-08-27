import React, { useState} from 'react'
import * as Icon from 'react-feather'
import Sectiontitle from '../components/Sectiontitle'
import Layout from '../components/Layout'

function About() {
  // To handle the toggling of the menu icon in a resolution like that of a mobile phone or like that
  const [toggler, setToggler] = useState(false)
  const handleToggler = (event) => {
    setToggler({
      toggler: event,
    })
  }


  return (
    <Layout>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="About Me" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-about-image">
                <img
                  src="/images/image2.jpg"
                  alt="about"
                  onClick={() => handleToggler(!toggler)}
                />
                <span className="mi-about-image-icon">
                  <Icon.ZoomIn />
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  I am <span className="color-theme">Himesh Singh Chauhan</span>
                </h3>
                <p>
                  I am a third year student at the Gyan Ganga Institute of
                  Technology and Sciences. My primary passions are computer science and
                  Chess.
                </p>
                <ul>
                  <li>
                    <b>Full Name</b> Himesh Singh Chauhan
                  </li>
                  <li>
                    <b>Age</b> 20
                  </li>
                  <li>
                    <b>Phone</b> 1234567891
                  </li>
                  <li>
                    <b>Nationality</b> Indian
                  </li>
                  <li>
                    <b>Languages</b>C++, Python, JavaScript
                  </li>
                  <li>
                    <b>Email</b> himesh.singh.csds21@ggits.net
                  </li>
                  <li>
                    <b>Address</b> Unknown
                  </li>
                  <li>
                    <b>Status</b> <u style={{'text-decoration':'none'}}>Junior Year Student</u>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </Layout>
  )
}

export default About
