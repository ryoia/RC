import { SubmissionError } from 'redux-form'
import { itemlist } from 'actions/AppActions.js'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function SearchSubmit(values, dispatch) {
  return sleep(1000) // simulate server latency
  .then(() => {
    if (!values.search) {
      throw new SubmissionError({search: 'Search cannot be empty', _error: 'Please complete all fields' })
    }
    var searchTerm = {term: values.search}
    return $.when($.ajax({
      url: 'http://www.renters-circle.com:8080/RentersCircle/item/search',
      type: 'POST',
      contentType: 'application/json',
      crossDomain: true,
      data: JSON.stringify(searchTerm)
    })).then(function(data, textStatus, jqXHR) {
      if (data.status >= 300) {
        throw new SubmissionError({ _error: data.message });
      } else {
        dispatch(itemlist(data.results))
      }
    })
  })
}

export default SearchSubmit
