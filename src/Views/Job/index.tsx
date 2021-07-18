import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Api from '../../Api';
import Client from '../../Types/IClient';
import Job from '../../Types/IJob';
import ClientForm from './ClientForm';
import JobForm from './JobForm';

const Job: React.FC<Record<string, never>> = () => {
  const { jobID } = useParams<{ jobID: string }>();

  const [job, setJob] = useState({} as Job);
  const [client, setClient] = useState({} as Client);

  const isDeleted = job.deleted;

  const init = () => {
    if (jobID) {
      Api.getJob(parseInt(jobID)).then(({ data }) => {
        setJob(data.data);
        setClient(data.data.client);
      });
    }
  };

  useEffect(() => {
    init();
  }, []);

  const handleSaveJob = async () => {
    if (jobID) {
      const result = await Api.patchJob(job);

      if (result.data.success) {
        window.close();
      } else {
        alert('An unexpected error occured:' + result.data.message);
      }
    } else {
      const ourjob = job;
      if (client._id) {
        ourjob.client = client._id;
      } else {
        const newClient = await Api.createClient(client);
        ourjob.client = newClient._id;
      }
      const result = await Api.postJob(job);

      if (result.data.success) {
        window.close();
      } else {
        alert('An unexpected error occured:' + result.data.message);
      }
    }
  };

  const handleDeleteJob = async () => {
    if (isDeleted) {
      // Recover the job
      Api.recoverJob(job.jobID).then(() => {
        setJob({ ...job, deleted: false });
      });
    } else {
      // Delete the job
      Api.deleteJob(job.jobID).then(() => {
        setJob({ ...job, deleted: true });
      });
    }
  };

  return job ? (
    <Container fluid>
      <Row noGutters>
        <Col sm={4}>
          <div className="border my-3 mr-3 p-2">
            <ClientForm
              job={job}
              setJob={setJob}
              client={client}
              setClient={setClient}
            />
          </div>
        </Col>
        <Col sm={8}>
          <div className="border my-3 p-2">
            <JobForm job={job} setJob={setJob} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end">
          {jobID && (
            <Button
              variant={isDeleted ? 'warning' : 'danger'}
              size="sm"
              className="mr-2"
              onClick={handleDeleteJob}
            >
              {isDeleted ? 'Recover Job' : 'Delete Job'}
            </Button>
          )}

          <Button
            variant="secondary"
            size="sm"
            className="mr-2"
            onClick={() => window.close()}
          >
            Cancel
          </Button>
          <Button variant="success" size="sm" onClick={handleSaveJob}>
            Save Changes
          </Button>
        </Col>
      </Row>
    </Container>
  ) : (
    <span />
  );
};

export default Job;
