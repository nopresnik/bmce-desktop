import React from 'react';
import { Col, Form } from 'react-bootstrap';
import Job from '../../Types/IJob';

interface PropTypes {
  job: Job;
  setJob: React.Dispatch<React.SetStateAction<Job>>;
}

const ClientForm: React.FC<PropTypes> = (props) => {
  return (
    <>
      <h6>Client details</h6>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" size="sm" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Address line 1"
            size="sm"
            readOnly
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Address line 2"
            size="sm"
            readOnly
          />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" placeholder="City" size="sm" readOnly />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} sm={8}>
            <Form.Control type="text" placeholder="State" size="sm" readOnly />
          </Form.Group>
          <Form.Group as={Col} sm={4}>
            <Form.Control
              type="text"
              placeholder="Postcode"
              size="sm"
              readOnly
            />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Label>Contact Details</Form.Label>
          <Form.Control type="text" placeholder="Phone" size="sm" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" placeholder="Mobile" size="sm" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" placeholder="Email" size="sm" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Notes</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            placeholder="Notes"
            size="sm"
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default ClientForm;
