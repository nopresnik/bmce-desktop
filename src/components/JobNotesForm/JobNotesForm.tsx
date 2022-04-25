import React from 'react';
import { Form } from 'react-bootstrap';
import { useJobForm } from '../../views/job/JobFormProvider';

export const JobNotesForm: React.VFC = () => {
  const { job, setJob } = useJobForm();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          rows={3}
          placeholder="Notes"
          size="sm"
          value={job.description || ''}
          name="description"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Additional Notes</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          rows={3}
          placeholder="Additional notes"
          size="sm"
          value={job.notes || ''}
          name="notes"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Purchase Order Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Purchase Order Number"
          size="sm"
          value={job.purchaseOrder || ''}
          name="purchaseOrder"
          onChange={handleOnChange}
        />
      </Form.Group>
    </>
  );
};
