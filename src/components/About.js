import React, { Component } from 'react';
import { string } from 'prop-types';
import { FaUserCircle } from 'react-icons/fa';

class About extends Component {
  render() {
    const { aboutData } = this.props;

    return (
      <section className='about-section'>
        {/* Render the FaUserCircle icon */}
        <h2 className="text-uppercase"><FaUserCircle /> About</h2>
        <p>{aboutData}</p>
      </section>
    );
  }
}

// Define the prop type for aboutData as a required string
About.propTypes = {
  aboutData: string.isRequired, 
};

export default About;
