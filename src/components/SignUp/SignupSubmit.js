import { SubmissionError } from 'redux-form'
import {signup} from 'actions/AppActions.js'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function SignUpSubmit(values, dispatch) {
  return sleep(1000)
  .then(() => {
    if (!values.firstname) {
      throw new SubmissionError({firstname: 'First name cannot be empty', _error: 'Please complete all fields' })
    }
    if (!values.lastname) {
      throw new SubmissionError({lastname: 'Last name cannot be empty', _error: 'Please complete all fields' })
    }
    if (!values.email) {
      throw new SubmissionError({email: 'Email cannot be empty', _error: 'Please complete all fields' })
    }
    if (!values.password) {
      throw new SubmissionError({password: 'Password cannot be empty', _error: 'Please complete all fields' })
    }
    if (!values.confirmpassword) {
      throw new SubmissionError({confirmpassword: 'Confirm password cannot be empty', _error: 'Please complete all fields' })
    }
    if (values.password !== values.confirmpassword) {
      throw new SubmissionError({confirmpassword: 'Confirm password needs to be the same as password', _error: 'Please type same passwords' })
    }
    var vals = { firstname: values.firstname, lastname: values.lastname, email: values.email, password: values.password}
    return $.when($.ajax({
      url: 'http://www.renters-circle.com:8080/RentersCircle/user/signup',
      type: 'POST',
      crossDomain: true,
      dataType: 'json',
      contentType: 'application/json',
      data: '{"firstname":"' +  values.firstname+ '", "lastname":"' + values.lastname+ '", "email":"' +  values.email+ '", "password":"' + values.password+'"}'
    })).then(function(data, textStatus, jqXHR) {
      if (data.status >= 300) {
        throw new SubmissionError({ _error: data.message });
      } else {
        values.userId = data.userId;
        dispatch(signup(values))
      }
    })
  })
}

export default SignUpSubmit
