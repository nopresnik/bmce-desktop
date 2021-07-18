import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import Helpers from '../../Helpers';

const QuickView: React.FC<Record<string, never>> = () => {
  const [id, setId] = useState<number>();

  const handleOpen = () => {
    return Helpers.openJob(id);
  };

  return (
    <InputGroup>
      <FormControl
        type="text"
        value={id}
        placeholder="Job #"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onClick={(e: any) => (e.target.value = '')}
        onChange={(e) => setId(parseInt(e.target.value))}
        onKeyUp={(e: React.KeyboardEvent) => {
          if (e.key === 'Enter') {
            handleOpen();
          }
        }}
      />
      <Button variant="secondary" onClick={handleOpen}>
        Open
      </Button>
    </InputGroup>
  );
};

export default QuickView;
