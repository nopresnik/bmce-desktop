// TODO: Add type safety.  Remove use of any in future
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Col, Form, Row, Table } from 'react-bootstrap';
import Address from '../../Types/IAddress';
import Job from '../../Types/IJob';
import JobStatus from '../../Types/IJobStatus';
import Price from '../../Types/IPrice';

interface PropTypes {
  job: Job;
  setJob: React.Dispatch<React.SetStateAction<Job>>;
}

const handleChange = (e: any, data: any, setData: any) => {
  const fieldName: string = e.target.name;
  const value: string = e.target.value;
  setData({ ...data, [fieldName]: value });
};

const handleCheckChange = (e: any, data: any, setData: any) => {
  const fieldName: string = e.target.name;
  const value: string = e.target.checked;
  setData({ ...data, [fieldName]: value });
};

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
  const { job, setJob } = props;
  const [location, setLocation] = useState<Address>();

  useEffect(() => {
    setLocation(job.location);
    console.log(job.location);
  }, []);

  useEffect(() => {
    console.log('update', location);
    console.log('update', job);
    setJob({ ...job, location: { ...job.location, ...location } });
  }, [location]);

  return (
    <>
      <Form.Group>
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Address line 1"
          size="sm"
          value={(job.location && job.location.line1) || ''}
          name="line1"
          onChange={(e) => handleChange(e, location, setLocation)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Address line 2"
          size="sm"
          value={(job.location && job.location.line2) || ''}
          name="line2"
          onChange={(e) => handleChange(e, location, setLocation)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="City"
          size="sm"
          value={(job.location && job.location.city) || ''}
          name="city"
          onChange={(e) => handleChange(e, location, setLocation)}
        />
      </Form.Group>
      <Form.Row>
        <Form.Group as={Col} sm={8}>
          <Form.Control
            type="text"
            placeholder="State"
            size="sm"
            value={(job.location && job.location.state) || ''}
            name="state"
            onChange={(e) => handleChange(e, location, setLocation)}
          />
        </Form.Group>
        <Form.Group as={Col} sm={4}>
          <Form.Control
            type="text"
            placeholder="Postcode"
            size="sm"
            value={(job.location && job.location.postcode) || ''}
            name="postcode"
            onChange={(e) => handleChange(e, location, setLocation)}
          />
        </Form.Group>
      </Form.Row>
    </>
  );
};

const JobNotesForm: React.FC<PropTypes> = (props) => {
  const { job, setJob } = props;
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
          name="description"
          onChange={(e) => handleChange(e, job, setJob)}
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
          name="notes"
          onChange={(e) => handleChange(e, job, setJob)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Purchase Order Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Additional notes"
          size="sm"
          value={job.purchaseOrder || ''}
          name="purchaseOrder"
          onChange={(e) => handleChange(e, job, setJob)}
        />
      </Form.Group>
    </>
  );
};

const JobPricingForm: React.FC<PropTypes> = (props) => {
  const { job, setJob } = props;

  const emptyPrice: Price = { description: '', price: 0 };

  const [newPrice, setNewPrice] = useState<Price>({
    description: '',
    price: 0,
  });

  const renderPricingList = () =>
    job.pricing &&
    job.pricing.map((element, index) => (
      <tr key={index}>
        <td>{element.description}</td>
        <td className="text-right">${Number(element.price).toFixed(2)}</td>
        <td>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              const newList: [Price] = job.pricing;
              newList.splice(index, 1);
              setJob({ ...job, pricing: newList });
            }}
          >
            <i className="bi-dash-lg text-danger"></i>
          </a>
        </td>
      </tr>
    ));

  const getTotalPrice = () =>
    (job.pricing && job.pricing.reduce((a, b) => a + b.price, 0).toFixed(2)) ||
    Number(0).toFixed(2);

  const handlePriceUpdate = (e: any) => {
    e.preventDefault();
    const updatedList = job.pricing;
    updatedList.push(newPrice);
    setJob({ ...job, pricing: updatedList });
    setNewPrice(emptyPrice);
  };

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
              <Form.Control
                type="select"
                size="sm"
                value={newPrice.description || ''}
                onChange={(e) =>
                  setNewPrice({ ...newPrice, description: e.target.value })
                }
              />
            </td>
            <td width="90">
              <Form.Control
                className="text-right"
                type="text"
                size="sm"
                value={newPrice.price || ''}
                onChange={(e) =>
                  setNewPrice({
                    ...newPrice,
                    price: parseInt(e.target.value),
                  })
                }
                onKeyUp={(e: React.KeyboardEvent) => {
                  if (e.key === 'Enter') {
                    handlePriceUpdate(e);
                  }
                }}
              />
            </td>
            <td>
              <a href="" onClick={handlePriceUpdate}>
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
  const { job, setJob } = props;

  const [newRef, setNewRef] = useState('');

  const renderPrevRefList = () =>
    job.previousRefs &&
    job.previousRefs.map((ref, index) => (
      <tr key={index}>
        <td>{ref}</td>
        <td>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              const newList = job.previousRefs;
              newList.splice(index, 1);
              setJob({ ...job, previousRefs: newList });
            }}
          >
            <i className="bi-dash-lg text-danger"></i>
          </a>
        </td>
      </tr>
    ));

  const handleAddNewRef = (e: any) => {
    e.preventDefault();
    const updatedList = job.previousRefs;
    updatedList.push(parseInt(newRef));
    setJob({ ...job, previousRefs: updatedList });
    setNewRef('');
  };

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
              <Form.Control
                type="select"
                size="sm"
                value={newRef}
                onChange={(e) => setNewRef(e.target.value)}
                onKeyUp={(e: React.KeyboardEvent) => {
                  if (e.key === 'Enter') {
                    handleAddNewRef(e);
                  }
                }}
              />
            </td>
            <td>
              <a href="" onClick={handleAddNewRef}>
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
  const { job, setJob } = props;

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
          onChange={() => setJob({ ...job, status: JobStatus.Active })}
        />
        <Form.Check
          custom
          type="radio"
          id="hold"
          label="On Hold"
          checked={testStatus(JobStatus.Hold)}
          onChange={() => setJob({ ...job, status: JobStatus.Hold })}
        />
        <Form.Check
          custom
          type="radio"
          id="completed"
          label="Completed"
          checked={testStatus(JobStatus.Completed)}
          onChange={() => setJob({ ...job, status: JobStatus.Completed })}
        />
        <Form.Row className="d-flex align-center">
          <Form.Group as={Col}>
            <Form.Control
              type="date"
              size="sm"
              value={
                job.dateCompleted &&
                new Date(job.dateCompleted).toISOString().substr(0, 10)
              }
              name="dateCompleted"
              onChange={(e) => handleChange(e, job, setJob)}
              disabled={job.status !== JobStatus.Completed}
            />
          </Form.Group>
          <Form.Group as={Col} className="d-flex">
            <Form.Label className="mr-2">By</Form.Label>
            <Form.Control
              type="select"
              size="sm"
              value={job.completedBy}
              name="completedBy"
              onChange={(e) => handleChange(e, job, setJob)}
              disabled={job.status !== JobStatus.Completed}
            />
          </Form.Group>
        </Form.Row>
      </Form.Group>
    </>
  );
};

const JobInvoiceForm: React.FC<PropTypes> = (props) => {
  const { job, setJob } = props;

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
            name="invoiced"
            onChange={(e) => handleCheckChange(e, job, setJob)}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Check
            custom
            type="checkbox"
            id="paid"
            label="Invoice Paid"
            checked={job.invoicePaid === true}
            name="invoicePaid"
            onChange={(e) => handleCheckChange(e, job, setJob)}
          />
        </Form.Group>
      </Form.Row>
    </Form.Group>
  );
};

export default JobForm;
