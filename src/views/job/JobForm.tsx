// TODO: Add type safety.  Remove use of any in future
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import {
  JobInvoiceForm,
  JobLocationForm,
  JobNotesForm,
  JobPricingForm,
  JobStatusForm,
} from '../../components';

const JobForm: React.FC = () => {
  return (
    <>
      <h6>Job Details</h6>
      <Form>
        <Row>
          <Col>
            <JobLocationForm />
            <JobNotesForm />
          </Col>
          <Col>
            <JobPricingForm />
            <JobStatusForm />
            <JobInvoiceForm />
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default JobForm;
