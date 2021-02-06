import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/card.css';
const card = ({ job }) => {
  const { title, location, type } = job;

  return (
    <div className='card'>
      <div className='card__title'>
        <p>{title}</p>
        <p> {location}</p>
        <p>{type}</p>
      </div>

      <button to='/details/' className='card__button'>
        Details <i class='fas fa-chevron-right'></i>
      </button>
    </div>
  );
};

export default card;
