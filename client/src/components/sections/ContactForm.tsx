
import { useFormik } from 'formik';
import { FormSchema, mobileQuery, URL_CONTACT_US } from '../../helpers';
import { Alert, Box, Button, FormControl, Snackbar } from '@mui/material';
import { TextInput } from '../FormComponent';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setReduxState } from '../../slice/commonSlice';
import axios from 'axios'
import { useMediaQuery } from 'react-responsive';

interface FormValues {
	customerName: string;
	email: string;
	mobNumber: string;
	details: string;
}

const ContactForm = () => {

	const dispatch = useDispatch()
  const isMobile = useMediaQuery(mobileQuery)

	const callApi = async (values: any) => {

		const res= await axios.post(URL_CONTACT_US, {...values})

		if (res?.status ===200 && typeof res?.data === 'string') {
			dispatch(setReduxState({
				name: "snackState",
				value: {
					open: true,
					// message: 'Thank you for reaching out . We will get back to you shortly',
					message: res.data,
					severity: 'success'
				}
			}))

			formik.resetForm()
		} else {
			dispatch(setReduxState({
				name: "snackState",
				value: {
					open: true,
					message: 'We ran into a technical issue. Please try again after some time.',
					severity: 'error'
				}
			}))
		}
	}

	const formik = useFormik<FormValues>({
		initialValues: {
			customerName: '',
			email: '',
			mobNumber: '',
			details: '',
		},
		validationSchema: FormSchema,
		onSubmit: values => {
			// alert(JSON.stringify(values, null, 2));

			// api call


			callApi(values)

		},
	});

	return <div className='text-center pt-8'>
		<form onSubmit={formik.handleSubmit} className={`w-full`}>
			<Box className='flex flex-col gap-4'
				sx={{
					" & .MuiFormLabel-root.MuiInputLabel-root": {
						fontFamily: '"Poppins", sans-serif'
					}
				}}
			>
				<FormControl className={`w-full`}
					style={{
						// fontFamily: '"Cabin", sans-serif'
					}}
				>
					<TextInput
						name="customerName"
						label="Name"
						value={formik.values.customerName}
						className={`w-full  text-2xl`}
						onChange={(e: any) => {
							formik.setFieldValue('customerName', e.target.value)
						}}
						error={formik.errors.customerName}
						helperText={formik.errors.customerName}
						sx={{
							'& .MuiInputLabel-root': {
								fontFamily: '"Poppins", sans-serif'
							},
						}}
					/>
				</FormControl>
				<FormControl className={`w-full`}>
					<TextInput
						name="mobNumber"
						label="Mobile No."
						value={formik.values.mobNumber}
						className={`w-full  text-2xl`}
						onChange={(e: any) => {
							formik.setFieldValue('mobNumber', e.target.value)
						}}
						error={formik.errors.mobNumber}
						helperText={formik.errors.mobNumber}
					/>
				</FormControl>
				<FormControl className={`w-full`}>
					<TextInput
						name="email"
						label="Email Address"
						value={formik.values.email}
						className={`w-full  text-2xl`}
						onChange={(e: any) => {
							formik.setFieldValue('email', e.target.value)
						}}
						error={formik.errors.email}
						helperText={formik.errors.email}
					/>
				</FormControl>
				<FormControl className={`w-full`}>
					<TextInput
						label="Message"
						multiline
						value={formik.values.details}
						onChange={(e: any) => formik.setFieldValue('details', e.target.value)}
						minRows={4}
						maxRows={6}
						error={formik.errors.details}
						helperText={formik.errors.details}
					/>
				</FormControl>

				<div className='flex items-end w-full h-full '>
					<Button
						className={`w-full`}
						type='submit'
						variant="contained"
						sx={{
							backgroundColor: 'var(--clr-blue)',
							fontSize: isMobile ? '0.8rem'  : '1.1rem',
							paddingBlock: '0.5rem',
							boxShadow: 'none',
							':hover': {
								backgroundColor: 'var(--clr-blue-hover)'
							}
						}}
					>Submit</Button>
				</div>


			</Box>
		</form>
	</div>
}

export default ContactForm;