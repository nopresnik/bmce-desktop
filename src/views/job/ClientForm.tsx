import React from 'react';
import { Form } from 'react-bootstrap';
import {
  ClientContactForm,
  ClientLocationForm,
  ClientNameForm,
} from '../../components';

const ClientForm: React.FC = () => {
  return (
    <>
      <h6>Client details</h6>
      <Form>
        <ClientNameForm />
        <ClientLocationForm />
        <ClientContactForm />
      </Form>
    </>
  );
};

export default ClientForm;
