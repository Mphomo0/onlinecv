import React from 'react'
import './App.css';
import { object } from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap'
import Profile from './components/Profile'
import About from './components/About'
import Education from './components/Education'
import Work from './components/Work'
import Skills from './components/Skills'


const App = props => {
    // Destructure the props object to get the required data
  const { jsonObj: { basics, education, work, skills } } = props

  // Extract the necessary data from the destructured props
  const profileData = basics;
  const aboutData = profileData.summary;
  const educationData = education;
  const workData = work;
  const skillsData = skills;

  return (
    <div className="App">
      <Container className='mt-5 mb-5'>
        <Row>
          {/* Column for the profile section */}
          <Col xs={12} sm={6} md={4} lg={3}>
            <Profile profileData={profileData} />
          </Col>

          {/* Column for the rest of the sections */}
          <Col xs className="blue-column">
            <About aboutData={aboutData} />
            <hr />

            <Education educationData={educationData} />
            <hr />

            <Work workData={workData} />
            <hr />

            <Skills skillsData={skillsData}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

// Type checking for props
App.propTypes = {
  jsonObj: object.isRequired
}

export default App;