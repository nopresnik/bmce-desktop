import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useJobForm } from './JobFormProvider';

const PrevRefForm: React.FC = () => {
  const { fetchJobAsPrevRef } = useJobForm();
  const jobID = useRef<HTMLInputElement>();

  const handleOnBlur = () => {
    // Handle pre filling the job.
    fetchJobAsPrevRef(+jobID.current.value);
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
