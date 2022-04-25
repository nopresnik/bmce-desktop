import React from 'react';
import { useJobForm } from '../../views/job/JobFormProvider';
import { AddressForm } from '../AddressForm/AddressForm';

export const ClientLocationForm: React.VFC = () => {
  const { client, setClient } = useJobForm();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClient({
      ...client,
      address: { ...client.address, [e.target.name]: e.target.value },
    });
  };

  return (
    <>
      <AddressForm
        value={client?.address}
        onChange={handleOnChange}
        readOnly={!!client?._id}
      />
    </>
  );
};
