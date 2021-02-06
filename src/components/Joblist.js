import React, { useContext, useEffect } from 'react';
import { Jobs } from '../Context';
import { Inputs } from '../Context';
import axios from 'axios';
import Card from '../utils/card';
import LazyLoad from 'react-lazyload';
const Joblist = () => {
  const [search, setSearch] = useContext(Inputs);
  const [jobs, setJobs] = useContext(Jobs);
  useEffect(() => {
    async function fetchJobs() {
      const jobArr = await axios.get(
        'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json',
        {
          params: { description: search.job, location: search.location },
          headers: {
            'User-Agent': 'request',
          },
        }
      );

      setJobs(jobArr.data);
    }
    fetchJobs();
  }, [search]);
  console.log('from joblistt', jobs);
  return (
    <>
      <div className='joblist__title'>
        <h1>JobFinder</h1>
      </div>

      <div className='containerr'>
        <LazyLoad once={true} height={100} offset={[100, 200]}>
          {jobs.map((job, idx) => (
            <Card job={job} />
          ))}
        </LazyLoad>
      </div>
    </>
  );
};

export default Joblist;
