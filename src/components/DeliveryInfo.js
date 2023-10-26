import React from 'react'
import { Button, Grid, TextField, InputLabel, Select, MenuItem, FormControl, Typography } from "@mui/material"
import { Formik, Form } from 'formik'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
const image = require("../images/delivery.jpg");
const validator = require("validator");

const states = ['Punjab', 'Haryana', 'Bangalore', 'Hyderabad'];
const cities = ['A', 'B', 'C', 'D'];
const responsiveGrid = {
    'flex': { 'xs': '100%', 'sm': '100%', 'md': '100%', 'lg': '50%', 'xl': '50%' }
}
const imgContent = {
    position: 'absolute',
    color: 'white',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}
export const DeliveryInfo = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        address: "",
        state: "",
        city: "",
        zip: "",
        email: "",
    };

    const validationSchema = (values) => {
        let errors = {};
        if (!values.firstName) {
            errors.firstName = 'Please enter your first name';
        }
        if (!values.lastName) {
            errors.lastName = 'Please enter your last name';
        }
        if (!values.address) {
            errors.address = 'Please enter your address';
        }
        if (!values.state) {
            errors.state = 'Please select your state';
        }
        if (!values.city) {
            errors.city = 'Please select one of the given options';
        }
        if (!values.email) {
            errors.email = 'Please enter your email';
        }
        else if (values.email) {
            if (!validator.isEmail(values.email)) {
                errors.email = 'Enter your valid Email!';
            }
        }
        if (!values.zip) {
            errors.zip = 'Please enter your Zip code'
        }
        return errors;
    }

    const onSubmit = (values) => {
        console.log('Form data', values);
        alert(JSON.stringify(values));
    };

    return (
        <>
            <Grid container>
                <Grid item sx={responsiveGrid}>
                    <Grid container alignContent="center" justifyContent="center" style={{ position: 'relative' }}>
                        <Grid item>
                            <img src={image} alt="delivery pic" style={{ width: '500px' }} />
                        </Grid>
                        <Grid item sx={imgContent}>
                            <Grid container direction="column" alignContent="center" mt="500px">
                                <Grid item ml="100px">
                                    <LocalShippingOutlinedIcon fontSize='large' />
                                </Grid>
                                <Grid item ml="50px">
                                    <Typography variant='h6'>Happy delivery</Typography>
                                </Grid>
                                <Grid item ml="10px">
                                    <Typography variant='subtitle1'>"Everything at your doorstep."</Typography>
                                </Grid>
                            </Grid>
                        </Grid>


                    </Grid>
                </Grid>

                <Grid item sx={responsiveGrid} mt="30px">
                    <Grid container direction="column" spacing={3} alignContent="center">
                        <Grid item ml="15px">
                            <h1>DELIVERY INFO</h1>
                        </Grid>
                        <Grid item ml="15px">
                            <Formik
                                initialValues={initialValues}
                                validate={validationSchema}
                                onSubmit={onSubmit}
                            >
                                {(formik) => (
                                    <Form>
                                        <Grid container direction="column" spacing={3}>
                                            <Grid item>
                                                <Grid container direction={{ 'xs': 'column', 'sm': 'column', 'md': 'row', 'lg': 'row', 'xl': 'row' }} spacing={2}>

                                                    <Grid item>
                                                        <TextField
                                                            fullWidth
                                                            id="firstName"
                                                            name="firstName"
                                                            label="First Name"
                                                            value={formik.values.firstName}
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                                            helperText={formik.touched.firstName && formik.errors.firstName}
                                                            size="small"
                                                        />
                                                    </Grid>

                                                    <Grid item>
                                                        <TextField
                                                            fullWidth
                                                            id="lastName"
                                                            name="lastName"
                                                            label="Last Name"
                                                            value={formik.values.lastName}
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                                            helperText={formik.touched.lastName && formik.errors.lastName}
                                                            size="small"
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item>
                                                <TextField
                                                    id="address"
                                                    name="address"
                                                    label="Address"
                                                    value={formik.values.address}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    error={formik.touched.address && Boolean(formik.errors.address)}
                                                    helperText={formik.touched.address && formik.errors.address}
                                                    style={{ width: '460px' }}
                                                    size="small"
                                                />
                                            </Grid>

                                            <Grid item>
                                                <Grid container direction="row" spacing={2}>
                                                    <Grid item>
                                                        <FormControl sx={{ minWidth: 221 }} size="small">
                                                            <InputLabel id="state">State</InputLabel>
                                                            <Select
                                                                labelId="stateId"
                                                                id="state"
                                                                name="state"
                                                                value={formik.values.state}
                                                                label="state"
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                error={formik.touched.state && Boolean(formik.errors.state)}
                                                            >
                                                                {states.map((option) => (
                                                                    <MenuItem key={option} value={option}>{option}</MenuItem>
                                                                ))}
                                                            </Select>
                                                            {formik.touched.state && formik.errors.state ? (
                                                                <div style={{ color: 'red' }}>{formik.errors.state}</div>
                                                            ) : null}
                                                        </FormControl>
                                                    </Grid>

                                                    <Grid item>
                                                        <FormControl sx={{ minWidth: 221 }} size="small">
                                                            <InputLabel id="city">City</InputLabel>
                                                            <Select
                                                                labelId="cityId"
                                                                id="city"
                                                                name="city"
                                                                value={formik.values.city}
                                                                label="city"
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                error={formik.touched.city && Boolean(formik.errors.city)}
                                                            >
                                                                {cities.map((option) => (
                                                                    <MenuItem key={option} value={option}>{option}</MenuItem>
                                                                ))}
                                                            </Select>
                                                            {formik.touched.city && formik.errors.city ? (
                                                                <div style={{ color: 'red' }}>{formik.errors.city}</div>
                                                            ) : null}
                                                        </FormControl>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item>
                                                <TextField
                                                    id="zip"
                                                    name="zip"
                                                    label="Zip"
                                                    value={formik.values.zip}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    error={formik.touched.zip && Boolean(formik.errors.zip)}
                                                    helperText={formik.touched.zip && formik.errors.zip}
                                                    style={{ width: '460px' }}
                                                    size="small"
                                                />
                                            </Grid>

                                            <Grid item>
                                                <TextField
                                                    id="email"
                                                    name="email"
                                                    label="Email"
                                                    value={formik.values.email}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                                    helperText={formik.touched.email && formik.errors.email}
                                                    style={{ width: '460px' }}
                                                    size="small"
                                                />
                                            </Grid>

                                            <Grid item ml="374px">
                                                <Grid container display="row">
                                                    <Button variant="contained" type='submit' disabled={!formik.isValid || formik.isSubmitting}> Submit </Button>
                                                </Grid>
                                            </Grid>

                                        </Grid>
                                    </Form>
                                )}
                            </Formik>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}