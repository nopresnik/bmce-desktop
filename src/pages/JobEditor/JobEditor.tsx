import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Grid, IconButton, Stack, Typography } from '@mui/material';
import { FormikTextField, StyledHeader, StyledPageContainer } from 'components';
import { Form, Formik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { parseJobNo } from 'util/helpers/parsers';
import * as Yup from 'yup';
import { StyledPaper } from './JobEditor.styles';

interface FormValues {
  email: string;
}

type JobEditorProps = {
  backButton?: boolean;
};

export const JobEditor: React.VFC<JobEditorProps> = ({ backButton = true }) => {
  const params = useParams();
  const navigate = useNavigate();
  const isView = !!params.jobID;
  const jobNo = parseJobNo(params.jobID || '');

  const schema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
  });
  const initialValues = {} as FormValues;

  return (
    <StyledPageContainer>
      <StyledHeader variant="h4">
        {backButton && (
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
        )}
        {isView ? `Job #${jobNo}` : 'Create Job'}
      </StyledHeader>
      <Formik
        initialValues={initialValues}
        onSubmit={() => console.log('Submitting')}
        validationSchema={schema}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <StyledPaper>
                <Typography variant="subtitle2">Client details</Typography>
                <Typography>Name</Typography>
                <FormikTextField
                  formikKey="clientName"
                  label="Name"
                  size="small"
                  fullWidth
                  margin="dense"
                />
                <Typography>Address</Typography>
                <FormikTextField
                  formikKey="clientLine1"
                  label="Line 1"
                  size="small"
                  fullWidth
                  margin="dense"
                />
                <FormikTextField
                  formikKey="clientLine2"
                  label="Line 2"
                  size="small"
                  fullWidth
                  margin="dense"
                />
                <FormikTextField
                  formikKey="clientCity"
                  label="City"
                  size="small"
                  fullWidth
                  margin="dense"
                />
                <Grid container spacing={1}>
                  <Grid item xs={8}>
                    <FormikTextField
                      formikKey="clientState"
                      label="State"
                      size="small"
                      fullWidth
                      margin="dense"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FormikTextField
                      formikKey="clientPostcode"
                      label="Postcode"
                      size="small"
                      fullWidth
                      margin="dense"
                    />
                  </Grid>
                </Grid>
                <Typography>Contact details</Typography>
                <FormikTextField
                  formikKey="clientPhone"
                  label="Phone"
                  size="small"
                  fullWidth
                  margin="dense"
                />
                <FormikTextField
                  formikKey="clientMobile"
                  label="Mobile"
                  size="small"
                  fullWidth
                  margin="dense"
                />
                <FormikTextField
                  formikKey="clientEmail"
                  label="Email"
                  size="small"
                  fullWidth
                  margin="dense"
                />
                <Typography>Notes</Typography>
                <FormikTextField
                  formikKey="clientNotes"
                  label="Notes"
                  size="small"
                  fullWidth
                  margin="dense"
                  multiline
                  rows={2}
                />
              </StyledPaper>
            </Grid>
            <Grid item xs={8}>
              <StyledPaper>
                <Typography variant="subtitle2">Job details</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography>Location</Typography>
                    <FormikTextField
                      formikKey="email"
                      label="Email"
                      size="small"
                      fullWidth
                      margin="dense"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormikTextField
                      formikKey="email"
                      label="Email"
                      size="small"
                      fullWidth
                      margin="dense"
                    />
                  </Grid>
                </Grid>
              </StyledPaper>
            </Grid>
          </Grid>
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </StyledPageContainer>
  );
};
