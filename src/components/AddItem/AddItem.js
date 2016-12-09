import React from 'react'
import data from 'data/addItemData.json'
import CategoryOption from './CategoryOption.js'
import styles from './AddItem.css'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Col from 'react-bootstrap/lib/Col'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'
import { Field, reduxForm } from 'redux-form'
import AddSubmit from './AddSubmit.js'
import SignUpInput from 'components/SignUp/SignupInput.js'
// import DropImage from './DropImage'
var Dropzone = require('react-dropzone');
import Redirect from 'react-router/Redirect'

class AddItem extends React.Component {
  state = {uploadedImages: []}

  onUpload = (images) => {
    var data = new FormData();
    data.append('image', images[0])
    this.setState({uploadedImages:data})
  }

  componentDidMount() {
    this.handleInitialize()
  }

  handleInitialize() {
    const initData = {
      "userId": this.props.userId
    }
    this.props.initialize(initData)
  }

  render() {
    const { error, handleSubmit, pristine, reset, submitting, submitSucceeded } = this.props
    const images = this.state.uploadedImages.get ? this.state.uploadedImages.get('image') : []
    if (this.props.isLoggedIn) {
      return (
        <div>
          <Form onSubmit={this.props.handleSubmit(AddSubmit)} className={styles.body} horizontal>
            <FormGroup className={styles.userId} controlId="id">
              <Field name="userId" component="text"/>
            </FormGroup>

            <FormGroup controlId="images">
              <ControlLabel>Select Images</ControlLabel>
              <Field name="picture" component={props =>
                <Dropzone
                  {...props.input}
                  multiple={false}
                  onDrop={(filesToUpload) => {
                    this.files = filesToUpload;
                    return props.input.onChange(filesToUpload);
                  }}
                  >
                  <div>Try dropping a file here, or click to select file to upload.</div>
                </Dropzone>
                } type="file"/>
              {this.files &&
                <div>
                  {this.files.map((file, i) => <img className={styles.img} key={i} src={file.preview}/>)}
                </div>
                }
              </FormGroup>

              <FormGroup controlId="category">
                <ControlLabel>Category</ControlLabel>
                <Field name="categoryOption" component="select">
                  {
                    data.categories.map(function(elem) {
                      // return <CategoryOption key={elem} option={elem} />
                      return <option value={elem} key={elem}>{elem}</option>
                    })
                  }
                </Field>
              </FormGroup>

              <FormGroup controlId="title">
                <ControlLabel>Title</ControlLabel>
                <Field component={SignUpInput} name="title" type="text" placeholder="Please enter the title of your item" />
              </FormGroup>

              <FormGroup controlId="description">
                <ControlLabel>Description</ControlLabel>
                <Field component={SignUpInput} name="description" type="text" placeholder="Please enter the description of your item" />
              </FormGroup>

              <FormGroup controlId="rate">
                <ControlLabel>Rate/Day</ControlLabel>
                <Field component={SignUpInput} name="rate" type="text" placeholder="Please enter the daily rate" />
              </FormGroup>

              <FormGroup controlId="deposit">
                <ControlLabel>Deposit</ControlLabel>
                <Field component={SignUpInput} name="deposit" type="text" placeholder="Please enter the deposit amount" />
              </FormGroup>

              <FormGroup>
                <Col smOffset={6} sm={2}>
                  <Button disabled={submitting || submitSucceeded} type="submit">
                    Add Item
                  </Button>
                </Col>
              </FormGroup>
            </Form>
            {submitSucceeded && <Redirect to='/' />}
          </div>
      )
    } else {
      return (
        <h2>You need to login to be able to list items.</h2>
      )
    }
  }
}
AddItem = reduxForm({
  form: 'submitValidation'
})(AddItem);

export default AddItem
