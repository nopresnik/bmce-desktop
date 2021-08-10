// TODO: Add type safety.  Remove use of any in future
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Col, Form, InputGroup } from 'react-bootstrap';
import Api from '../../Api';
import Address from '../../Types/IAddress';
import Client from '../../Types/IClient';
import Job from '../../Types/IJob';

interface PropTypes {
  job: Job;
  setJob: React.Dispatch<React.SetStateAction<Job>>;
  client: Client;
  setClient: React.Dispatch<React.SetStateAction<Client>>;
}

const handleChange = (e: any, data: any, setData: any) => {
  const fieldName: string = e.target.name;
  const value: string = e.target.value;
  setData({ ...data, [fieldName]: value });
};

const ClientForm: React.FC<PropTypes> = (props) => {
  const { job, setJob, client, setClient } = props;

  const [dbClients, setDbClients] = useState([]);

  const [clientText, setClientText] = useState('');

  // const [client, setClient] = useState({} as Client);

  useEffect(() => {
    // Populate the clients list
    Api.getClients().then((data) => setDbClients(data));
  }, []);

  useEffect(() => {
    if (job.jobID) {
      console.log('Fetching client details');
      Api.getClient(job.client._id).then((data) => setClient(data));
    }
  }, [job]);

  useEffect(() => {
    // Disable all text boxes
    setClientText(client.name);
    if (client._id) {
      setJob({ ...job, client: client._id });
    }
  }, [client]);

  // useEffect(() => {
  //   if (!client._id) {
  //     setClient({ ...client, name: clientText });
  //   }
  // }, [clientText]);

  const handleOnClientSelect = () => {
    const filteredClients = dbClients.filter(
      (client) => client.name === clientText
    );

    if (filteredClients.length && client.name) {
      setClient(filteredClients[0]);
    } else {
      setClient({ name: client.name } as Client);
    }
  };

  return (
    <>
      <h6>Client details</h6>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              list="client-list"
              placeholder="Name"
              size="sm"
              value={client && client.name}
              // onChange={(e) => setClientText(e.target.value)}
              name="name"
              onChange={(e) => handleChange(e, client, setClient)}
              onBlur={handleOnClientSelect}
              isInvalid={client._id === undefined && clientText !== ''}
            />
            <datalist id="client-list">
              {dbClients.map((client) => (
                <option key={client._id} value={client.name} />
              ))}
            </datalist>
            <Form.Control.Feedback type="invalid">
              No existing client has been selected.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <ClientLocationForm
          job={job}
          setJob={setJob}
          client={client}
          setClient={setClient}
        />

        <Form.Group>
          <Form.Label>Contact Details</Form.Label>
          <Form.Control
            type="text"
            placeholder="Phone"
            size="sm"
            value={(client && client.phone) || ''}
            readOnly={client._id !== undefined}
            name="phone"
            onChange={(e) => handleChange(e, client, setClient)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Mobile"
            size="sm"
            value={(client && client.mobile) || ''}
            readOnly={client._id !== undefined}
            name="mobile"
            onChange={(e) => handleChange(e, client, setClient)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Email"
            size="sm"
            value={(client && client.email) || ''}
            readOnly={client._id !== undefined}
            name="email"
            onChange={(e) => handleChange(e, client, setClient)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Notes</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            placeholder="Notes"
            size="sm"
            value={(client && client.notes) || ''}
            readOnly={client._id !== undefined}
            name="notes"
            onChange={(e) => handleChange(e, client, setClient)}
          />
        </Form.Group>
      </Form>
    </>
  );
};

const ClientLocationForm: React.FC<PropTypes> = (props) => {
  const { client, setClient } = props;
  const [location, setLocation] = useState<Address>();

  useEffect(() => {
    setLocation(client.address);
  }, []);

  useEffect(() => {
    setClient({ ...client, address: { ...client.address, ...location } });
  }, [location]);

  return (
    <>
      <Form.Group>
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Address line 1"
          size="sm"
          value={(client.address && client.address.line1) || ''}
          readOnly={client._id !== undefined}
          name="line1"
          onChange={(e) => handleChange(e, location, setLocation)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Address line 2"
          size="sm"
          value={(client.address && client.address.line2) || ''}
          readOnly={client._id !== undefined}
          name="line2"
          onChange={(e) => handleChange(e, location, setLocation)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="City"
          size="sm"
          value={(client.address && client.address.city) || ''}
          readOnly={client._id !== undefined}
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
            value={(client.address && client.address.state) || ''}
            readOnly={client._id !== undefined}
            name="state"
            onChange={(e) => handleChange(e, location, setLocation)}
          />
        </Form.Group>
        <Form.Group as={Col} sm={4}>
          <Form.Control
            type="text"
            placeholder="Postcode"
            size="sm"
            value={(client.address && client.address.postcode) || ''}
            readOnly={client._id !== undefined}
            name="postcode"
            onChange={(e) => handleChange(e, location, setLocation)}
          />
        </Form.Group>
      </Form.Row>
    </>
  );
};

export default ClientForm;
