import React from 'react';
import { useJobForm } from '../../views/job/JobFormProvider';
import { AddressForm } from '../AddressForm/AddressForm';

export const JobLocationForm: React.VFC = () => {
  const { job, setJob } = useJobForm();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJob({
      ...job,
      location: { ...job.location, [e.target.name]: e.target.value },
    });
  };

  return <AddressForm value={job.location} onChange={handleOnChange} />;
};
