import React, { useRef } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import Helpers from '../../helpers';

const QuickView: React.FC = () => {
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
      <Button onClick={handleOpen}>Open</Button>
    </InputGroup>
  );
};

export default QuickView;
