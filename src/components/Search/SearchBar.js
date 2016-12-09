import React from 'react'
import PageHeader from 'react-bootstrap/lib/PageHeader'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Col from 'react-bootstrap/lib/Col'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'
import { Field, reduxForm } from 'redux-form'
import SearchSubmit from './SearchSubmit.js'
import SignUpInput from 'components/SignUp/SignupInput.js'
import Redirect from 'react-router/Redirect'
import Search from 'react-search'
import styles from './SearchBar.css'

class SearchBar extends React.Component{
  constructor (props) {
    super(props)
    this.state = { items: [], searched: false }
  }

  itemSelected(items) {
    // Ajax get call to backend to get item information
    // Link to /item/:itemId
    // ItemView needs a connect to check if isLoggedIn
    console.log(items)
  }

  getItemsAsync(searchValue, cb) {
    let url = `http://www.renters-circle.com:8080/RentersCircle/item/search`
    fetch(url).then( (response) => {
      return response.json();
    }).then((results) => {
      if(results.items != undefined){
        let result = results.items.map( (res, i) => { return { id: i, value: res.full_name } })
        this.setState({ items: result })
        cb(searchValue)
      }
    });
  }

  search() {
    var input = document.querySelector('input')
    var searchTerm = {term: input.value}
    let url = `http://www.renters-circle.com:8080/RentersCircle/item/search`

    return $.when($.ajax({
      url: url,
      type: 'POST',
      contentType: 'application/json',
      crossDomain: true,
      data: JSON.stringify(searchTerm)
    })).then(function(data, textStatus, jqXHR) {
      if (data.status < 300) {
        dispatch(itemlist(data.results))
        this.setState({items: data.results, searched: true})
      }
    });

    // ajax call to search api + searchTerm
    // success: pass items to ItemList view
  }

  render () {
    const { error, handleSubmit, pristine, reset, submitting, submitSucceeded } = this.props
    return (
      <div className={styles.body}>
        <Form onSubmit={this.props.handleSubmit(SearchSubmit)} horizontal>
          <Field component={SignUpInput} name="search" type="text" placeholder="Please enter the title of your item" />
          <Button disabled={submitting || submitSucceeded} type="submit">Search</Button>
        </Form>
        {submitSucceeded && <Redirect to='/search' />}
      </div>
    )
  }
}
SearchBar = reduxForm({
  form: 'submitValidation'
})(SearchBar);

export default SearchBar
        // <!-- <Search items={this.state.items} -->
        // <!--   multiple={false} -->
        // <!--   getItemsAsync={this.getItemsAsync.bind(this)} -->
        // <!--   onItemsChanged={this.itemSelected.bind(this)} /> -->
