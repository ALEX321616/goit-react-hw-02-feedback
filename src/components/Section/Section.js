// import PropTypes from 'prop-types';
import React from 'react';

const Section = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  );
};

export default Section;
