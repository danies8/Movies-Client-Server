import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';

import logInUtils from '../../Utils/LogInUtils.js'
import common from '../../Utils/Common';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },

}));

function CreateAccount(props) {
 
  const classes = useStyles();
  const [errorMessage, setErrorMessage] = useState("");
  
  const login = (e) => {
    props.history.push(common.login);
  }

  const validate = values => {
    const errors = {};
    if (!values.userName) {
      errors.userName = 'Please enter your user name.';
    }

    if (!values.password) {
      errors.password = 'Please enter your user password.';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      userName: '',
      password: ''
    },
    validate,
    onSubmit: async values => {
      const logInCreateObj = {};
      logInCreateObj.userName = values.userName;
      logInCreateObj.password = values.password;

      const results =  await logInUtils.createLoginUser(logInCreateObj);
      if(results.isSuccess){
         props.history.push(common.login);
      }
      else {
        setErrorMessage(results.errorMessage);
      }

    },
  });

  return (
       <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <h5>Create an Account</h5>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <TextField required  id="standard-basic" label="User name"
                 name="userName" onChange={formik.handleChange} value={formik.values.userName}
                onBlur={formik.handleBlur}
                autoFocus
              />
            </div><br />
            {formik.touched.userName && formik.errors.userName ? (
              <div>{formik.errors.userName}</div>
            ) : null}
            <div>
              <TextField required label="Password" id="standard-password-input" type="password" autoComplete="current-password" defaultValue="Password"
                name="password" onChange={formik.handleChange} value={formik.values.password}
                onBlur={formik.handleBlur}
              />
            </div><br />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
            <Button type="submit" variant="contained" color="primary" >Create</Button>
            <Button variant="outlined" color="primary" onClick={login} className={classes.margin}>Back</Button><br />
            {errorMessage}
          </form>
        </Container>
      </React.Fragment>
 
  );
}

export default CreateAccount;
