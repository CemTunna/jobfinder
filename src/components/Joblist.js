import React, { useContext, useEffect } from 'react';
import { Jobs } from '../Context';
import { Inputs } from '../Context';
import axios from 'axios';
import Card from '../utils/card';
import { Link } from 'react-router-dom';

const Joblist = () => {
  const [search, setSearch] = useContext(Inputs);
  const [jobs, setJobs] = useContext(Jobs);
  useEffect(() => {
    async function fetchJobs() {
      const jobArr = await axios.get('/positions.json', {
        params: { description: search.job, location: search.location },
        headers: {
          'User-Agent': 'request',
        },
      });

      setJobs(jobArr.data);
    }
    fetchJobs();
  }, [search]);
  return (
    <>
      <div className='joblist__title'>
        <Link to='/' className='linktohome'>
          JobFinder{' '}
        </Link>
      </div>

      <div className='containerr'>
        {jobs.map((job, idx) => (
          <Card job={job} key={job.id} />
        ))}
      </div>
    </>
  );
};

export default Joblist;
