import React from 'react'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Col from 'react-bootstrap/lib/Col'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'
import SignUpInput from 'components/SignUp/SignupInput.js'
import PageHeader from 'react-bootstrap/lib/PageHeader'
import { Field, reduxForm } from 'redux-form'
import SignInSubmit from './SignInSubmit.js'
import Redirect from 'react-router/Redirect'
import styles from './signInStyles.css'

class SignIn extends React.Component {
  render() {
    const { error, handleSubmit, pristine, reset, submitting, submitSucceeded } = this.props
    return (
      <div>
        <PageHeader className={styles.header}>Sign In</PageHeader>
        <Form onSubmit={handleSubmit(SignInSubmit)} horizontal>
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
              {error && <strong>{error}</strong>}
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={6} sm={2}>
              <Button disabled={submitting || submitSucceeded} type="submit">
                Sign In
              </Button>
            </Col>
          </FormGroup>
        </Form>
        {submitSucceeded && <Redirect to='/' />}
      </div>
    )
  }
}
SignIn = reduxForm({
  form: 'submitValidation'
})(SignIn);

export default SignIn
