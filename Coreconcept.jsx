import React from 'react';
import './CoreConcept.css';

const CoreConcept = ({ icon, title, description }) => {
  return (
    <li>
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default CoreConcept;
