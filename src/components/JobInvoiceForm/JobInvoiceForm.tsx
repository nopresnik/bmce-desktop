import React from 'react';
import { Col, Form } from 'react-bootstrap';
import { useJobForm } from '../../views/job/JobFormProvider';

export const JobInvoiceForm: React.VFC = () => {
  const { job, setJob } = useJobForm();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJob({ ...job, [e.target.name]: e.target.checked });
  };

  return (
    <Form.Group>
      <Form.Label>Invoicing</Form.Label>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Check
            custom
            type="checkbox"
            id="invoiced"
            label="Invoiced"
            name="invoiced"
            checked={job.invoiced === true}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Check
            custom
            type="checkbox"
            id="paid"
            label="Invoice Paid"
            name="invoicePaid"
            disabled={!job.invoiced}
            checked={job.invoicePaid === true}
            onChange={handleOnChange}
          />
        </Form.Group>
      </Form.Row>
    </Form.Group>
  );
};
