import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { AgGridColumn, AgGridReact, AgGridReactProps } from 'ag-grid-react';
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Api from '../../Api';
import APIResult from '../../Types/IAPIResult';
import Client from '../../Types/IClient';

const ClientBook: React.FC<Record<string, never>> = () => {
  const [selectedClient, setSelectedClient] = useState<Client>({} as Client);

  return (
    <Container fluid>
      <Row className="h-100">
        <Col xs={5} className="vh-100">
          <ClientList setSelectedClient={setSelectedClient} />
        </Col>
        <Col xs={7} className="h-100">
          <ClientDetails
            selectedClient={selectedClient}
            setSelectedClient={setSelectedClient}
          />
        </Col>
      </Row>
    </Container>
  );
};

const ClientList: React.FC<{
  setSelectedClient: React.Dispatch<React.SetStateAction<Client>>;
}> = ({ setSelectedClient }) => {
  const [gridApi, setGridApi] = useState(null);
  const [, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);
  const [clients, setClients] = useState<Client[]>(null);
  const [filter, setFilter] = useState(null);

  const fetchClients = () => {
    Api.getClients().then((data) => {
      setClients(data);
      setRowData(data);
    });
  };

  const onGridReady = (params: AgGridReactProps) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    fetchClients();
  };

  const firstDataRendered = () => {
    gridApi.sizeColumnsToFit();

    window.onresize = () => gridApi.sizeColumnsToFit();
  };

  const getSelection = () => {
    const { data } = gridApi.getSelectedNodes()[0];

    setSelectedClient(data);
  };

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilter(value);
    setRowData(
      clients.filter((client) =>
        client.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className="d-flex h-100 flex-column">
      <Form>
        <Form.Group>
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            size="sm"
            value={filter}
            onChange={handleFilter}
          />
        </Form.Group>
      </Form>

      <div
        className="ag-theme-alpine mb-3 flex-grow-1"
        style={{ height: '100%', width: '100%' }}
      >
        <AgGridReact
          rowData={rowData}
          rowSelection="single"
          onGridReady={onGridReady}
          onFirstDataRendered={firstDataRendered}
          onSelectionChanged={getSelection}
          gridOptions={{
            onRowDoubleClicked: (params: APIResult<Client>) => {
              //TODO: Show jobs by client
              console.log('Double clicked:', params.data.name);
            },
          }}
        >
          <AgGridColumn field="name" headerName="Client name" />
        </AgGridReact>
      </div>
    </div>
  );
};

const ClientDetails: React.FC<{
  selectedClient: Client;
  setSelectedClient: React.Dispatch<React.SetStateAction<Client>>;
}> = ({ selectedClient, setSelectedClient }) => {
  const [address, setAddress] = useState(selectedClient.address);

  useEffect(() => {
    setSelectedClient({
      ...selectedClient,
      address: { ...selectedClient.address, ...address },
    });
  }, [address]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSelectedClient({ ...selectedClient, [name]: value });
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAddress({ ...address, [name]: value });
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          size="sm"
          name="name"
          value={selectedClient.name || ''}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          size="sm"
          value={(selectedClient.address && selectedClient.address.line1) || ''}
          name="line1"
          onChange={handleAddressChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          size="sm"
          value={(selectedClient.address && selectedClient.address.line2) || ''}
          name="line2"
          onChange={handleAddressChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          size="sm"
          value={(selectedClient.address && selectedClient.address.city) || ''}
          name="city"
          onChange={handleAddressChange}
        />
      </Form.Group>
      <Form.Row>
        <Form.Group as={Col} sm={8}>
          <Form.Control
            type="text"
            size="sm"
            value={
              (selectedClient.address && selectedClient.address.state) || ''
            }
            name="state"
            onChange={handleAddressChange}
          />
        </Form.Group>
        <Form.Group as={Col} sm={4}>
          <Form.Control
            type="text"
            size="sm"
            value={
              (selectedClient.address && selectedClient.address.postcode) || ''
            }
            name="postcode"
            onChange={handleAddressChange}
          />
        </Form.Group>
      </Form.Row>
      <Form.Group>
        <Form.Label>Contact Details</Form.Label>
        <Form.Control
          type="text"
          size="sm"
          placeholder="Phone"
          value={selectedClient.phone}
          name="phone"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          size="sm"
          placeholder="Mobile"
          value={selectedClient.mobile}
          name="mobile"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          size="sm"
          placeholder="Email"
          value={selectedClient.email}
          name="email"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Notes</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          size="sm"
          value={selectedClient.notes || ''}
          name="notes"
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
};

export default ClientBook;
