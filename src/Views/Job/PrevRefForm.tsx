import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';

interface PropTypes {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setPrevRef: (jobRef: string) => void;
}

const PrevRefForm: React.FC<PropTypes> = ({ setPrevRef }) => {
  const jobID = useRef<HTMLInputElement>();

  const handleOnBlur = () => {
    // Handle pre filling the job.
    setPrevRef(jobID.current.value);
  };

  return (
    <div className="border mt-3 mr-3 p-2">
      <h6>Previous Reference</h6>
      <Form>
        <Form.Group>
          <Form.Label>Job #</Form.Label>
          <Form.Control
            type="text"
            size="sm"
            placeholder="Job #"
            ref={jobID}
            onBlur={handleOnBlur}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default PrevRefForm;
function jobRef(jobRef: any) {
  throw new Error('Function not implemented.');
}
