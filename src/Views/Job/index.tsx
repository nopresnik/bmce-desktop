import React from 'react';
import { useParams } from 'react-router-dom';

interface Params {
  jobID: string;
}

const Job: React.FC<Record<string, never>> = () => {
  const { jobID } = useParams<Params>();
  return <h1>Hello from job {jobID}</h1>;
};

export default Job;
