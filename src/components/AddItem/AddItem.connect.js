import AddItem from './AddItem.js'
import { connect } from 'react-redux'
import { isLoggedIn, userId } from 'reducers'

const mapStateToProps = (state) => ({
  isLoggedIn: isLoggedIn(state),
  userId: userId(state)
})

export default connect(mapStateToProps)(AddItem)
