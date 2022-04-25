import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { JobFormButtons } from '../../components';
import Job from '../../types/IJob';
import ClientForm from './ClientForm';
import JobForm from './JobForm';
import { useJobForm } from './JobFormProvider';
import PrevRefForm from './PrevRefForm';

const Job: React.FC = () => {
  const { job, fetchJob } = useJobForm();
  const { jobID } = useParams<{ jobID: string }>();

  useEffect(() => {
    if (jobID) {
      fetchJob(+jobID);
    }
  }, []);

  return job ? (
    <Container fluid>
      <Row noGutters>
        <Col sm={4}>
          <div className="border my-3 mr-3 p-2">
            <ClientForm />
          </div>
        </Col>
        <Col sm={8}>
          {!jobID && (
            <Row>
              <Col sm={6}>
                <PrevRefForm />
              </Col>
            </Row>
          )}
          <div className="border my-3 p-2">
            <JobForm />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end">
          <JobFormButtons />
        </Col>
      </Row>
    </Container>
  ) : (
    <span />
  );
};

export default Job;
