import React from 'react'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Col from 'react-bootstrap/lib/Col'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'
import SignUpInput from './SignupInput.js'
import PageHeader from 'react-bootstrap/lib/PageHeader'
import styles from './SignUp.css'
import { Field, reduxForm } from 'redux-form'
import SignUpSubmit from './SignupSubmit.js'
import Redirect from 'react-router/Redirect'

class SignUp extends React.Component {
  render() {
    const { error, handleSubmit, pristine, reset, submitting, submitSucceeded } = this.props
    return (
      <div className={styles.body}>
        <PageHeader className={styles.form}>Sign Up</PageHeader>
        <Form onSubmit={handleSubmit(SignUpSubmit)} horizontal>
          <FormGroup controlId="firstName">
            <Col componentClass="firstName" smOffset={5} sm={2}>
              First Name
            </Col>
            <Col sm={2} smOffset={5} >
              <Field component={SignUpInput} name="firstname" type="text" />
            </Col>
          </FormGroup>

          <FormGroup controlId="lastName">
            <Col componentClass="lastName" smOffset={5}  sm={2}>
              Last Name
            </Col>
            <Col sm={2} smOffset={5} >
              <Field component={SignUpInput} name="lastname" type="text" />
            </Col>
          </FormGroup>

          <FormGroup controlId="email">
            <Col componentClass="Email" smOffset={5} sm={2}>
              Email
            </Col>
            <Col sm={2} smOffset={5} >
              <Field component={SignUpInput} name="email" type="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="password">
            <Col componentClass="Password" smOffset={5} sm={2}>
              Password
            </Col>
            <Col sm={2} smOffset={5} >
              <Field component={SignUpInput} name="password" type="password" />
            </Col>
          </FormGroup>

          <FormGroup controlId="confirmPassword">
            <Col componentClass="confirmPPassword" smOffset={5} sm={2}>
              Confirm Password
            </Col>
            <Col smOffset={5} md={4}>
              <Field component={SignUpInput} name="confirmpassword" type="password" />
              {error && <strong>{error}</strong>}
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={6} sm={2}>
              <Button disabled={submitting || submitSucceeded} type="submit">
                Sign Up
              </Button>
            </Col>
          </FormGroup>
        </Form>
        {submitSucceeded && <Redirect to='/' />}
      </div>
    )
  }
}
SignUp = reduxForm({
  form: 'submitValidation'
})(SignUp);

export default SignUp
