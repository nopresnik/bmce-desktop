import React from 'react';
import { Col, Form, Row, Table } from 'react-bootstrap';

const JobForm: React.FC<Record<string, never>> = () => {
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
            <JobPrevRefForm />
            <JobStatusForm />
            <JobInvoiceForm />
          </Col>
        </Row>
      </Form>
    </>
  );
};

const JobLocationForm: React.FC<Record<string, never>> = () => {
  return (
    <>
      <Form.Group>
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Address line 1" size="sm" />
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder="Address line 2" size="sm" />
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder="City" size="sm" />
      </Form.Group>
      <Form.Row>
        <Form.Group as={Col} sm={8}>
          <Form.Control type="text" placeholder="State" size="sm" />
        </Form.Group>
        <Form.Group as={Col} sm={4}>
          <Form.Control type="text" placeholder="Postcode" size="sm" />
        </Form.Group>
      </Form.Row>
    </>
  );
};

const JobNotesForm: React.FC<Record<string, never>> = () => {
  return (
    <>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" type="text" placeholder="Notes" size="sm" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Additional Notes</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Additional notes"
          size="sm"
        />
      </Form.Group>
    </>
  );
};

const JobPricingForm: React.FC<Record<string, never>> = () => {
  return (
    <Form.Group>
      <Form.Label>Pricing</Form.Label>
      <Table className="bg-white" size="sm">
        <thead>
          <tr>
            <th>Description</th>
            <th className="text-center">Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Soil test</td>
            <td className="text-right">$420.00</td>
            <td>
              <a href="" onClick={(e) => e.preventDefault()}>
                <i className="bi-dash-lg text-danger"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>Travel</td>
            <td className="text-right">$50.00</td>
            <td>
              <a href="" onClick={(e) => e.preventDefault()}>
                <i className="bi-dash-lg text-danger"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <Form.Control type="select" size="sm" />
            </td>
            <td width="90">
              <Form.Control className="text-right" type="text" size="sm" />
            </td>
            <td>
              <a href="" onClick={(e) => e.preventDefault()}>
                <i className="bi-plus-lg text-success"></i>
              </a>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td className="text-right">
              <strong>$470.00</strong>
            </td>
            <td></td>
          </tr>
        </tfoot>
      </Table>
    </Form.Group>
  );
};

const JobPrevRefForm: React.FC<Record<string, never>> = () => {
  return (
    <Form.Group>
      <Form.Label>Previous References</Form.Label>
      <Table className="bg-white" size="sm">
        <thead>
          <tr>
            <th>Job #</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>69696</td>
            <td>
              <a href="" onClick={(e) => e.preventDefault()}>
                <i className="bi-dash-lg text-danger"></i>
              </a>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td className="w-100">
              <Form.Control type="select" size="sm" />
            </td>
            <td>
              <a href="" onClick={(e) => e.preventDefault()}>
                <i className="bi-plus-lg text-success"></i>
              </a>
            </td>
          </tr>
        </tfoot>
      </Table>
    </Form.Group>
  );
};

const JobStatusForm: React.FC<Record<string, never>> = () => {
  return (
    <>
      <Form.Group>
        <Form.Label>Status</Form.Label>
        <Form.Check custom type="radio" id="active" label="Active" />
        <Form.Check custom type="radio" id="hold" label="On Hold" />
        <Form.Check custom type="radio" id="completed" label="Completed" />
        <Form.Row className="d-flex align-center">
          <Form.Group as={Col}>
            <Form.Control type="date" size="sm" />
          </Form.Group>
          <Form.Group as={Col} className="d-flex">
            <Form.Label className="mr-2">By</Form.Label>
            <Form.Control type="select" size="sm" />
          </Form.Group>
        </Form.Row>
      </Form.Group>
    </>
  );
};

const JobInvoiceForm: React.FC<Record<string, never>> = () => {
  return (
    <Form.Group>
      <Form.Label>Invoicing</Form.Label>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Check custom type="checkbox" id="invoiced" label="Invoiced" />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Check custom type="checkbox" id="paid" label="Invoice Paid" />
        </Form.Group>
      </Form.Row>
    </Form.Group>
  );
};

export default JobForm;
