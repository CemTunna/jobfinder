import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import '../styles/detail.css';
import { Link } from 'react-router-dom';
const Details = ({ match }) => {
  const [job, setJob] = useState({});
  const { title, location, company_logo, description, company_url } = job;
  useEffect(() => {
    async function fetchJobs() {
      const jobArr = await axios.get(
        `https://jobs.github.com/positions/${match.params.id}.json?markdown=true`,
        {
          headers: {
            'User-Agent': 'request',
          },
        }
      );
      setJob(jobArr.data);
    }
    fetchJobs();
  }, []);
  return (
    <>
      <div className='container'>
        <div className='hero'>
          <div className='hero__text'>
            <p>{title}</p>
            <p>{location}</p>
          </div>
          <div className='hero__img'>
            {' '}
            <img className='hero__img--img' src={company_logo} alt='' />
          </div>
        </div>
        <div className='main'>
          <ReactMarkdown source={description} />
        </div>
        <div className='footer'>
          <Link to='/joblist/' className='col'>
            <i class='fas fa-chevron-left icon'></i> Back to job list
          </Link>

          <a href={company_url} className='col' target='_blank'>
            To Company <i class='fas fa-chevron-right icon2'></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Details;
