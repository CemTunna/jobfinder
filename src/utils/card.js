import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/card.css';
const card = ({ job }) => {
  const { title, location, type, id } = job;

  return (
    <div className='card'>
      <div className='card__title'>
        <p>{title}</p>
        <p> {location}</p>
        <p>{type}</p>
      </div>
      <Link to={`/details/${id}`}>
        <button className='card__button'>
          Details <i className='fas fa-chevron-right'></i>
        </button>
      </Link>
    </div>
  );
};

export default card;
