import ItemList from './ItemList.js'
import { connect } from 'react-redux'
import { searchResult } from 'reducers'

const mapStateToProps = (state) => ({
  searchResult: searchResult(state)
})

export default connect(mapStateToProps)(ItemList)
