import React from 'react';
import { Form, Col } from 'react-bootstrap';
import IAddress from '../../types/IAddress';

interface AddressFormProps {
  value: IAddress;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

export const AddressForm: React.VFC<AddressFormProps> = ({
  value,
  onChange,
  readOnly,
}) => {
  return (
    <>
      <Form.Group>
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Address line 1"
          size="sm"
          value={(value && value.line1) || ''}
          name="line1"
          onChange={onChange}
          readOnly={readOnly}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Address line 2"
          size="sm"
          value={(value && value.line2) || ''}
          name="line2"
          onChange={onChange}
          readOnly={readOnly}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="City"
          size="sm"
          value={(value && value.city) || ''}
          name="city"
          onChange={onChange}
          readOnly={readOnly}
        />
      </Form.Group>
      <Form.Row>
        <Form.Group as={Col} sm={8}>
          <Form.Control
            type="text"
            placeholder="State"
            size="sm"
            value={(value && value.state) || ''}
            name="state"
            onChange={onChange}
            readOnly={readOnly}
          />
        </Form.Group>
        <Form.Group as={Col} sm={4}>
          <Form.Control
            type="text"
            placeholder="Postcode"
            size="sm"
            value={(value && value.postcode) || ''}
            name="postcode"
            onChange={onChange}
            readOnly={readOnly}
          />
        </Form.Group>
      </Form.Row>
    </>
  );
};
