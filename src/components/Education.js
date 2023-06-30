import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaUserGraduate } from 'react-icons/fa';

class Education extends Component {
  render() {
    const { educationData } = this.props;

    // Create a JSX element for each education item in educationData
    const getEducation = educationData.map((item, index) => {
      return (
        <div key={index}>
          <h3>{item.studyType} {item.area}</h3>
          <h6>{item.institution}</h6>
          <p>Studied: {item.startDate} - {item.endDate}</p>
        </div>
      );
    });

    return (
      <section className='education-section'>
        <h2 className="text-uppercase"><FaUserGraduate /> About</h2>
        {getEducation}
      </section>
    );
  }
}

// Define the prop type for educationData as a required array of objects with specific shape
Education.propTypes = {
  educationData: PropTypes.arrayOf(
    PropTypes.shape({
      studyType: PropTypes.string.isRequired,
      area: PropTypes.string.isRequired,
      institution: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Education;
