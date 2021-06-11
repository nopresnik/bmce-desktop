import React from 'react';
import { Col, Form, Row, Table } from 'react-bootstrap';
import Job from '../../Types/IJob';
import JobStatus from '../../Types/IJobStatus';

interface PropTypes {
  job: Job;
  setJob: React.Dispatch<React.SetStateAction<Job>>;
}

const JobForm: React.FC<PropTypes> = (props) => {
  const { job, setJob } = props;
  return (
    <>
      <h6>Job Details</h6>
      <Form>
        <Row>
          <Col>
            <JobLocationForm job={job} setJob={setJob} />
            <JobNotesForm job={job} setJob={setJob} />
          </Col>
          <Col>
            <JobPricingForm job={job} setJob={setJob} />
            <JobPrevRefForm job={job} setJob={setJob} />
            <JobStatusForm job={job} setJob={setJob} />
            <JobInvoiceForm job={job} setJob={setJob} />
          </Col>
        </Row>
      </Form>
    </>
  );
};

const JobLocationForm: React.FC<PropTypes> = (props) => {
  const { job } = props;
  return (
    <>
      <Form.Group>
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Address line 1"
          size="sm"
          value={job.location.line1 || ''}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Address line 2"
          size="sm"
          value={job.location.line2 || ''}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="City"
          size="sm"
          value={job.location.city || ''}
        />
      </Form.Group>
      <Form.Row>
        <Form.Group as={Col} sm={8}>
          <Form.Control
            type="text"
            placeholder="State"
            size="sm"
            value={job.location.state || ''}
          />
        </Form.Group>
        <Form.Group as={Col} sm={4}>
          <Form.Control
            type="text"
            placeholder="Postcode"
            size="sm"
            value={job.location.postcode || ''}
          />
        </Form.Group>
      </Form.Row>
    </>
  );
};

const JobNotesForm: React.FC<PropTypes> = (props) => {
  const { job } = props;
  return (
    <>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Notes"
          size="sm"
          value={job.description || ''}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Additional Notes</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Additional notes"
          size="sm"
          value={job.notes || ''}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Purchase Order Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Additional notes"
          size="sm"
          value={job.purchaseOrder || ''}
        />
      </Form.Group>
    </>
  );
};

const JobPricingForm: React.FC<PropTypes> = (props) => {
  const { job } = props;

  const renderPricingList = () =>
    job.pricing.map((element) => (
      <tr>
        <td>{element.description}</td>
        <td className="text-right">${Number(element.price).toFixed(2)}</td>
        <td>
          <a href="" onClick={(e) => e.preventDefault()}>
            <i className="bi-dash-lg text-danger"></i>
          </a>
        </td>
      </tr>
    ));

  const getTotalPrice = () =>
    job.pricing.reduce((a, b) => a + b.price, 0).toFixed(2);

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
          {renderPricingList()}
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
              <strong>${getTotalPrice()}</strong>
            </td>
            <td></td>
          </tr>
        </tfoot>
      </Table>
    </Form.Group>
  );
};

const JobPrevRefForm: React.FC<PropTypes> = (props) => {
  const { job } = props;

  const renderPrevRefList = () =>
    job.previousRefs.map((ref) => (
      <tr>
        <td>{ref}</td>
        <td>
          <a href="" onClick={(e) => e.preventDefault()}>
            <i className="bi-dash-lg text-danger"></i>
          </a>
        </td>
      </tr>
    ));

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
        <tbody>{renderPrevRefList()}</tbody>
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

const JobStatusForm: React.FC<PropTypes> = (props) => {
  const { job } = props;

  const testStatus = (status: JobStatus) => job.status == status;

  return (
    <>
      <Form.Group>
        <Form.Label>Status</Form.Label>
        <Form.Check
          custom
          type="radio"
          id="active"
          label="Active"
          checked={testStatus(JobStatus.Active)}
        />
        <Form.Check
          custom
          type="radio"
          id="hold"
          label="On Hold"
          checked={testStatus(JobStatus.Hold)}
        />
        <Form.Check
          custom
          type="radio"
          id="completed"
          label="Completed"
          checked={testStatus(JobStatus.Completed)}
        />
        <Form.Row className="d-flex align-center">
          <Form.Group as={Col}>
            <Form.Control
              type="date"
              size="sm"
              value={new Date(job.dateCompleted).toISOString().substr(0, 10)}
            />
          </Form.Group>
          <Form.Group as={Col} className="d-flex">
            <Form.Label className="mr-2">By</Form.Label>
            <Form.Control type="select" size="sm" value={job.completedBy} />
          </Form.Group>
        </Form.Row>
      </Form.Group>
    </>
  );
};

const JobInvoiceForm: React.FC<PropTypes> = (props) => {
  const { job } = props;

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
            checked={job.invoiced === true}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Check
            custom
            type="checkbox"
            id="paid"
            label="Invoice Paid"
            checked={job.invoicePaid === true}
          />
        </Form.Group>
      </Form.Row>
    </Form.Group>
  );
};

export default JobForm;
