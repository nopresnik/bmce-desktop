import React, { useRef } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import Helpers from '../../Helpers';

const QuickView: React.FC<Record<string, never>> = () => {
  const jobNo = useRef<HTMLInputElement>();

  const handleOpen = () => {
    const id = jobNo.current.value.replace('-', '.');
    return Helpers.openJob(id);
  };

  return (
    <InputGroup>
      <FormControl
        type="text"
        placeholder="Job #"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onClick={(e: any) => (e.target.value = '')}
        ref={jobNo}
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
