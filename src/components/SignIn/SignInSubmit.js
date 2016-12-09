import { SubmissionError } from 'redux-form'
import {signin} from 'actions/AppActions.js'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function SignInSubmit(values, dispatch) {
  return sleep(1000)
  .then(() => {
    if (!values.email) {
      throw new SubmissionError({email: 'Email cannot be empty', _error: 'Please complete all fields' })
    }
    if (!values.password) {
      throw new SubmissionError({password: 'Password cannot be empty', _error: 'Please complete all fields' })
    }
    return $.when($.ajax({
      url: 'http://www.renters-circle.com:8080/RentersCircle/user/login',
      type: 'POST',
      crossDomain: true,
      dataType: 'json',
      contentType: 'application/json',
      data: '{"email":"' +  values.email+ '", "password":"' + values.password+'"}'
    })).then(function(data, textStatus, jqXHR) {
      if (data.status >= 300) {
        throw new SubmissionError({ _error: data.message });
      } else {
        values.firstName = data.firstName
        dispatch(signin(values))
      }
    })
  })
}

export default SignInSubmit
