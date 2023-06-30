import React, { Component } from 'react';
import { FaBriefcase } from 'react-icons/fa';
import PropTypes from 'prop-types';

class Work extends Component {
  render() {
    const { workData } = this.props;

    return (
      <section className='work-section'>
        <h2 className="text-uppercase">
          <FaBriefcase /> Work
        </h2>
        {/* show all the work data */}
        {workData.map((item, index) => (
          <div className="tl-item" key={index}>
            <div className="tl-dot b-warning"></div>
            <div className="tl-content">
              <div className=""><h3>{item.company}</h3></div>
              <div className="tl-date">{item.startDate} - {item.endDate}</div>
              <div className="">{item.summary}</div>
            </div>
          </div>
        ))}
      </section>
    );
  }
}

// Define the prop type for workData as a required array of objects with specific shape
Work.propTypes = {
  workData: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Work;
