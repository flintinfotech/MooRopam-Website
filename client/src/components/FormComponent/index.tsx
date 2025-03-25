
import { FormHelperText, TextField, useFormControl } from "@mui/material";
import { useMemo, useState } from "react";
import * as Yup from "yup";
import { isValidPhoneNumber } from "react-phone-number-input";
import { mobileQuery, requiredText } from "../../helpers";
import { FormikConfig, FormikErrors } from "formik";
import { useMediaQuery } from "react-responsive";

export const TextInput = (props: any) => {
  const isMobile = useMediaQuery(mobileQuery)

  return <TextField color="secondary" {...props}
    variant="standard"
    size="small"
    sx={{
      '& *, & .MuiFormLabel-root-MuiInputLabel-root': {
        fontFamily: '"Poppins", sans-serif'
      },
      '& *::placeholder': {
        fontFamily: '"Poppins", sans-serif'
      },
      '& .MuiFormHelperText-root': {
        margin: 0
      },
      '& .MuiFormLabel-root[data-shrink="true"]': {
        color: 'var(--clr-bg-dark-medium)'
      },
      '& .MuiInputBase-root::after': {
        borderColor: 'var(--clr-bg-dark-medium)'
      },
      '& .MuiInputBase-input': {
        fontSize: isMobile ? '0.76rem'  : '1.2rem',
        lineHeight: 1
      },
    }}
    style={{
      fontFamily: '"Poppins", sans-serif'

    }}
  />

}

export const FormHelperTextWrapper = ({ formik, name } : {
  formik: any
  name: string
}) => {
  const { focused, ...rest } = useFormControl() || {};

  const [color, setColor] = useState('inherit')

  const helperText = useMemo(() => {

    if (formik.errors[name]) {
      setColor('var(--form-error)')
      return formik.errors[name];
    }

    return '';
  }, [formik]);

  return <FormHelperText
    sx={{
      marginTop: 0,
      marginLeft: 0,
      color
    }}
  >{helperText}</FormHelperText>;
}