import React from 'react';
import { Col, Form } from 'react-bootstrap';
import JobStatus from '../../types/IJobStatus';
import { useJobForm } from '../../views/job/JobFormProvider';
import { StaffPicker } from '../StaffPicker/StaffPicker';

export const JobStatusForm: React.VFC = () => {
  const { job, setJob } = useJobForm();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleOnStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const statusMap: Record<string, JobStatus> = {
      Active: JobStatus.Active,
      Hold: JobStatus.Hold,
      Completed: JobStatus.Completed,
    };
    const status = statusMap[e.target.id] || JobStatus.Active;

    setJob(
      status === JobStatus.Completed
        ? { ...job, status, dateCompleted: new Date() }
        : { ...job, status }
    );
  };

  return (
    <>
      <Form.Group>
        <Form.Label>Status</Form.Label>
        <Form.Check
          custom
          type="radio"
          id="Active"
          label="Active"
          checked={job.status === JobStatus.Active || !job.status}
          onChange={handleOnStatusChange}
        />
        <Form.Check
          custom
          type="radio"
          id="Hold"
          label="Hold"
          checked={job.status === JobStatus.Hold}
          onChange={handleOnStatusChange}
        />
        <Form.Check
          custom
          type="radio"
          id="Completed"
          label="Completed"
          checked={job.status === JobStatus.Completed}
          onChange={handleOnStatusChange}
        />
        <Form.Row className="d-flex align-center">
          <Form.Group as={Col}>
            <Form.Control
              name="dateCompleted"
              type="date"
              size="sm"
              value={
                job.dateCompleted &&
                job.status === JobStatus.Completed &&
                new Date(job.dateCompleted).toISOString().substring(0, 10)
              }
              onChange={handleOnChange}
              disabled={job.status !== JobStatus.Completed}
            />
          </Form.Group>
          <Form.Group as={Col} className="d-flex">
            <Form.Label className="mr-2">By</Form.Label>
            <StaffPicker
              name="completedBy"
              value={job.completedBy}
              onChange={handleOnChange}
              disabled={job.status !== JobStatus.Completed}
            />
          </Form.Group>
        </Form.Row>
      </Form.Group>
    </>
  );
};
