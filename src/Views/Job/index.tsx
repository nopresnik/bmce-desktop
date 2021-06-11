import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Api from '../../Api';
import ClientForm from './ClientForm';
import JobForm from './JobForm';
import Job from '../../Types/IJob';

interface Params {
  jobID: string;
}

const Job: React.FC<Record<string, never>> = () => {
  const { jobID } = useParams<Params>();

  const [job, setJob] = useState<Job>();

  useEffect(() => {
    Api.getJob(parseInt(jobID)).then(({ data }) => {
      setJob(data.data);
      console.log(data.data);
    });
  }, []);

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
            <JobForm />
          </div>
        </Col>
      </Row>
    </Container>
  ) : (
    <h1>Loading</h1>
  );
};

export default Job;
