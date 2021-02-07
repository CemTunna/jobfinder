import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Inputs } from '../Context';
import '../styles/home.css';
const Home = ({ history }) => {
  const [job, setJob] = useState('');
  const [location, setLocation] = useState('');
  const [search, setSearch] = useContext(Inputs);
  const handleJob = (e) => {
    setJob(e.target.value);
  };
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='home'>
      <div className='home__title'>
        <h1>JobFInderr</h1>
      </div>

      <div className='container'>
        <form action='' onSubmit={handleSubmit} className='home__form'>
          <input
            type='text'
            placeholder='job title'
            value={job}
            onChange={handleJob}
            className='form__item'
          />
          <input
            type='text'
            placeholder='country,state,city...'
            value={location}
            onChange={handleLocation}
            className='form__item'
          />

          <button
            className='form__item button'
            type='submit'
            disabled={!job && !location}
            onClick={() => {
              job &&
                location &&
                setSearch({
                  job: job.trim().toLowerCase(),
                  location: location.trim().toLowerCase(),
                });
              history.push('/joblist/');
            }}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
