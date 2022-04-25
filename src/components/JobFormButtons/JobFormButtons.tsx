import React from 'react';
import { Button } from 'react-bootstrap';
import { useJobForm } from '../../views/job/JobFormProvider';

export const JobFormButtons: React.VFC = () => {
  const { job, saveJob, recoverJob, deleteJob, clearForm } = useJobForm();
  const isDeleted = job.deleted;

  const handleSave = async () => {
    const success = await saveJob();

    if (success) {
      return handleClose();
    }

    return alert('Something went wrong');
  };

  const handleClear = () => clearForm();

  const handleClose = () => window.close();

  const handleDelete = async () => {
    if (job.deleted) {
      return recoverJob();
    }

    return deleteJob();
  };

  return (
    <>
      {job.jobID ? (
        <Button
          variant={isDeleted ? 'warning' : 'danger'}
          size="sm"
          className="mr-2"
          onClick={handleDelete}
        >
          {isDeleted ? 'Recover Job' : 'Delete Job'}
        </Button>
      ) : (
        <Button
          variant="danger"
          size="sm"
          className="mr-2"
          onClick={handleClear}
        >
          Clear Form
        </Button>
      )}

      <Button
        variant="secondary"
        size="sm"
        className="mr-2"
        onClick={handleClose}
      >
        Cancel
      </Button>
      <Button size="sm" onClick={handleSave}>
        Save Changes
      </Button>
    </>
  );
};
