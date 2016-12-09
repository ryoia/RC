import React from 'react'
import styles from './SignupInput.css'

class SignUpInput extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { input, label, type, meta: { touched, error } } = this.props
    return (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} className={styles.input} placeholder={label} type={type}/>
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    )
  }
}

export default SignUpInput
