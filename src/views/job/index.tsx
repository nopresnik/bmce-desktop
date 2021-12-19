import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import {
  getJob,
  deleteJob,
  patchJob,
  createClient,
  postJob,
  recoverJob,
} from '../../api';
import Client from '../../types/IClient';
import Job from '../../types/IJob';
import ClientForm from './ClientForm';
import JobForm from './JobForm';
import PrevRefForm from './PrevRefForm';

const Job: React.FC = () => {
  const { jobID } = useParams<{ jobID: string }>();

  const [job, setJob] = useState({} as Job);
  const [client, setClient] = useState({} as Client);

  const isDeleted = job.deleted;

  const init = (jobRef?: string) => {
    if (jobID) {
      return getJob(jobID).then(({ data }) => {
        setJob(data.data);
        setClient(data.data.client);
      });
    }

    if (jobRef && !jobID) {
      return getJob(jobRef).then(({ data }) => {
        let job = data.data;
        // Add the previous reference to the job
        job = { ...job, previousRefs: [parseInt(jobRef)] };
        delete job._id;
        delete job.jobID;
        delete job.date;
        delete job.description;
        delete job.pricing;
        delete job.invoiced;
        delete job.invoicePaid;
        delete job.dateCompleted;
        delete job.status;
        delete job.completedBy;

        setJob(job);
        setClient(job.client);
      });
    }

    setJob({} as Job);
    setClient({} as Client);
  };

  const setPrevRef = (jobRef: string) => {
    init(jobRef);
  };

  useEffect(() => {
    init();
  }, []);

  const handleSaveJob = async () => {
    console.log(job);
    if (jobID) {
      const result = await patchJob(job);

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
        const newClient = await createClient(client);
        ourjob.client = newClient._id;
      }
      const result = await postJob(job);

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
      recoverJob(job.jobID).then(() => {
        setJob({ ...job, deleted: false });
      });
    } else {
      // Delete the job
      deleteJob(job.jobID).then(() => {
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
          {!jobID && (
            <Row>
              <Col sm={6}>
                <PrevRefForm setPrevRef={setPrevRef} />
              </Col>
            </Row>
          )}
          <div className="border my-3 p-2">
            <JobForm job={job} setJob={setJob} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end">
          {jobID ? (
            <Button
              variant={isDeleted ? 'warning' : 'danger'}
              size="sm"
              className="mr-2"
              onClick={handleDeleteJob}
            >
              {isDeleted ? 'Recover Job' : 'Delete Job'}
            </Button>
          ) : (
            <Button
              variant="danger"
              size="sm"
              className="mr-2"
              onClick={() => init()}
            >
              Clear Form
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
          <Button size="sm" onClick={handleSaveJob}>
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
