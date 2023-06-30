import React, { Component } from 'react';
import { FaAssistiveListeningSystems } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Skills extends Component {
  render() {
    const { skillsData } = this.props;

    return (
      <section className='skills-section'>
        <h2 className="text-uppercase"><FaAssistiveListeningSystems /> Skills</h2>
        <ul>
          {/* displaying all the skills button */}
          {skillsData[0].keywords.map((skill, index) => (
            <li key={index}>
              <Button variant="success">{skill}</Button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

Skills.propTypes = {
  skillsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Skills;
