import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Api from '../../Api';
import Job from '../../Types/IJob';
import ClientForm from './ClientForm';
import JobForm from './JobForm';

const Job: React.FC<Record<string, never>> = () => {
  const { jobID } = useParams<{ jobID: string }>();

  const [job, setJob] = useState<Job>();

  useEffect(() => {
    Api.getJob(parseInt(jobID)).then(({ data }) => {
      setJob(data.data);
    });
  }, []);

  const handleSaveJob = async () => {
    const result = await Api.patchJob(job);

    if (result.data.success) {
      window.close();
    } else {
      alert('An unexpected error occured:' + result.data.message);
    }
  };

  return job ? (
    <Container fluid>
      <Row noGutters>
        <Col sm={4}>
          <div className="border my-3 mr-3 p-2">
            <ClientForm job={job} setJob={setJob} />
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
          <Button
            variant="secondary"
            className="mr-2"
            onClick={() => window.close()}
          >
            Cancel
          </Button>
          <Button variant="success" onClick={handleSaveJob}>
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
