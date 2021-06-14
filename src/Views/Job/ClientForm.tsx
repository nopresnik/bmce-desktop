import React, { useEffect, useState } from 'react';
import { Col, Form, InputGroup } from 'react-bootstrap';
import Api from '../../Api';
import Client from '../../Types/IClient';
import Job from '../../Types/IJob';

interface PropTypes {
  job: Job;
  setJob: React.Dispatch<React.SetStateAction<Job>>;
  client: Client;
  setClient: React.Dispatch<React.SetStateAction<Client>>;
}

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

  const handleOnClientSelect = () => {
    const filteredClients = dbClients.filter(
      (client) => client.name === clientText
    );

    if (filteredClients.length && clientText) {
      setClient(filteredClients[0]);
    } else {
      setClient({} as Client);
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
              // value={(job.client && job.client.name) || ''}
              value={clientText}
              onChange={(e) => setClientText(e.target.value)}
              onBlur={handleOnClientSelect}
              isInvalid={client._id === undefined && clientText !== ''}
            />
            <datalist id="client-list">
              {dbClients.map((client) => (
                <option key={client._id} value={client.name} />
              ))}
            </datalist>
            <Form.Control.Feedback type="invalid">
              No existing client has been selected. This will create a new
              client.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Address line 1"
            size="sm"
            value={(client && client.address && client.address.line1) || ''}
            readOnly={client._id !== undefined}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Address line 2"
            size="sm"
            value={(client && client.address && client.address.line2) || ''}
            readOnly={client._id !== undefined}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="City"
            size="sm"
            value={(client && client.address && client.address.city) || ''}
            readOnly={client._id !== undefined}
          />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} sm={8}>
            <Form.Control
              type="text"
              placeholder="State"
              size="sm"
              value={(client && client.address && client.address.state) || ''}
              readOnly={client._id !== undefined}
            />
          </Form.Group>
          <Form.Group as={Col} sm={4}>
            <Form.Control
              type="text"
              placeholder="Postcode"
              size="sm"
              value={
                (client && client.address && client.address.postcode) || ''
              }
              readOnly={client._id !== undefined}
            />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Label>Contact Details</Form.Label>
          <Form.Control
            type="text"
            placeholder="Phone"
            size="sm"
            value={(client && client.phone) || ''}
            readOnly={client._id !== undefined}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Mobile"
            size="sm"
            value={(client && client.mobile) || ''}
            readOnly={client._id !== undefined}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Email"
            size="sm"
            value={(client && client.email) || ''}
            readOnly={client._id !== undefined}
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
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default ClientForm;
