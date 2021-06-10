import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ClientForm from './ClientForm';
import JobForm from './JobForm';

interface Params {
  jobID: string;
}

const Job: React.FC<Record<string, never>> = () => {
  const { jobID } = useParams<Params>();

  const [job, setJob] = useState();

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/jobs/' + jobID)
      .then(({ data }) => setJob(data.data));
  }, []);

  useEffect(() => {
    console.log(job);
  }, [job]);

  return (
    <Container fluid>
      <Row noGutters>
        <Col sm={4}>
          <div className="border my-3 mr-3 p-2">
            <ClientForm />
          </div>
        </Col>
        <Col sm={8}>
          <div className="border my-3 p-2">
            <JobForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Job;
