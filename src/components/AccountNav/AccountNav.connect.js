import AccountNav from './AccountNav'
import { connect } from 'react-redux'
import { logout } from 'actions/AppActions'
import { isLoggedIn, userName } from 'reducers'

const mapStateToProps = (state) => ({
  isLoggedIn: isLoggedIn(state),
  userName: userName(state)
})

// const mapDispatchToProps = (dispatch) => {
//   return {
//     logout: () => { dispatch(logout()) }
//   }
// }

const mapDispatchToProps = {
  logout
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountNav)
