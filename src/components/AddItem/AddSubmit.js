import { SubmissionError } from 'redux-form'
import { additem } from 'actions/AppActions.js'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function AddSubmit(values, dispatch) {
  return sleep(1000) // simulate server latency
  .then(() => {
    var image = new FormData()
    if (!values.title) {
      throw new SubmissionError({title: 'Title cannot be empty', _error: 'Please complete all fields' })
    }
    if (!values.description) {
      throw new SubmissionError({description: 'Description cannot be empty', _error: 'Please complete all fields' })
    }
    if (!values.categoryOption) {
      throw new SubmissionError({categoryOption: 'Category option cannot be empty', _error: 'Please complete all fields' })
    }
    if (!values.deposit) {
      throw new SubmissionError({deposit: 'Deposit cannot be empty', _error: 'Please complete all fields' })
    }
    if (!values.rate) {
      throw new SubmissionError({rate: 'Rate cannot be empty', _error: 'Please complete all fields' })
    }
    if (values.picture) {
       image.append('image', values.picture[0]); 
    }
    image.append('title', values.title)
    image.append('description', values.description)
    image.append('category', values.categoryOption)
    image.append('rate', values.rate)
    image.append('deposit', values.deposit)
    image.append('userId', values.userId)
    return $.when($.ajax({
      url: 'http://www.renters-circle.com:8080/RentersCircle/item/add',
      type: 'POST',
      crossDomain: true,
      dataType: 'json',
      contentType: false,
      processData: false,
      data: image
    })).then(function(data, textStatus, jqXHR) {
      if (data.status >= 300) {
        throw new SubmissionError({ _error: data.message });
      } else {
        values.imageId = data.imageId
        dispatch(additem(values))
      }
    })
  })
}

export default AddSubmit
