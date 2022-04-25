import React, { useEffect, useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { getClients } from '../../api';
import Client from '../../types/IClient';
import { useJobForm } from '../../views/job/JobFormProvider';

export const ClientNameForm: React.VFC = () => {
  const { client, setClient, job, setJob } = useJobForm();
  const [dbClients, setDbClients] = useState<Client[]>([]);
  const [clientText, setClientText] = useState('');

  useEffect(() => {
    // Populate the clients list
    getClients().then((data) => setDbClients(data));
    setClientText(client.name);
  }, []);

  const handleOnClientSelect = () => {
    const filteredClients = dbClients.filter((d) => d.name === client.name);

    if (filteredClients.length && client.name) {
      setClient(filteredClients[0]);
      setJob({ ...job, client: filteredClients[0]._id });
    } else {
      setClient({ name: client.name } as Client);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const property = e.target.name;
    const value = e.target.value;

    setClient({ ...client, [property]: value });
  };

  return (
    <Form.Group>
      <Form.Label>Name</Form.Label>
      <InputGroup hasValidation>
        <Form.Control
          type="text"
          list="client-list"
          placeholder="Name"
          size="sm"
          value={client && client.name}
          name="name"
          onChange={handleOnChange}
          onBlur={handleOnClientSelect}
          isInvalid={client?._id === undefined && clientText !== ''}
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
  );
};
