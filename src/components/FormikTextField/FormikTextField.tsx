import { TextFieldProps, TextField } from '@mui/material';
import { useField } from 'formik';

export interface FormikTextFieldProps {
  formikKey: string;
}

export const FormikTextField: React.VFC<
  FormikTextFieldProps & TextFieldProps
> = ({ formikKey, ...props }) => {
  const [field, meta] = useField(formikKey);

  return (
    <TextField
      id={field.name}
      data-testid={field.name}
      name={field.name}
      helperText={meta.touched ? meta.error : ''}
      error={meta.touched && !!meta.error}
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      {...props}
    />
  );
};
