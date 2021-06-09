import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const QuickView: React.FC<Record<string, never>> = () => {
  return (
    <InputGroup>
      <FormControl placeholder="Job #" />
      <Button variant="secondary">Quick View</Button>
    </InputGroup>
  );
};

export default QuickView;
