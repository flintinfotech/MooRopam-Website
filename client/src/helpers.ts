export const URL_CONTACT_US = 'https://flintinfotech.com/npcop/saveContactDetails'
import * as Yup from "yup";
import { isValidPhoneNumber } from "react-phone-number-input";

export const requiredText = (fieldName: string) => `${fieldName ? fieldName : 'This field'} is required`

export const FormSchema = Yup.object().shape({
  customerName: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required(requiredText('Name')),
  email: Yup.string()
    .email('Please enter a valid email ID')
    .required(requiredText('Email')),
  mobNumber: Yup.string()
    .test({
      name: 'phone',
      message: 'Please enter a valid phone number',
      test: (value) => {
        return value ? isValidPhoneNumber(value, { defaultCountry: 'IN' }) : true
      }
    }),
  details: Yup.string()
});


export const tabletQuery = { query: '(max-width: 1024px)' }
export const mobileQuery = { query: '(max-width: 600px)' }

export type ISnackPayload = {
  open: boolean,
  message: string,
  severity: "info" | "success" | "warning" | "error" | undefined
}

export const snackInitialState: ISnackPayload = {
  open: false,
  message: '',
  severity: 'info'
}