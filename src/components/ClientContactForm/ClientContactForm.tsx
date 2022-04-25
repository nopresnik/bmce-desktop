import React from 'react';
import { Form } from 'react-bootstrap';
import { useJobForm } from '../../views/job/JobFormProvider';

export const ClientContactForm: React.VFC = () => {
  const { client, setClient } = useJobForm();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const property = e.target.name;
    const value = e.target.value;

    setClient({ ...client, [property]: value });
  };

  return (
    <>
      <Form.Group>
        <Form.Label>Contact Details</Form.Label>
        <Form.Control
          type="text"
          placeholder="Phone"
          size="sm"
          value={(client && client.phone) || ''}
          readOnly={client?._id !== undefined}
          name="phone"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Mobile"
          size="sm"
          value={(client && client.mobile) || ''}
          readOnly={client?._id !== undefined}
          name="mobile"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Email"
          size="sm"
          value={(client && client.email) || ''}
          readOnly={client?._id !== undefined}
          name="email"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Notes</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Notes"
          size="sm"
          value={(client && client?.notes) || ''}
          readOnly={client?._id !== undefined}
          name="notes"
          onChange={handleOnChange}
        />
      </Form.Group>
    </>
  );
};
