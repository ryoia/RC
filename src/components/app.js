import React from 'react'
import Router from 'react-router/BrowserRouter'
import Match from 'react-router/Match'
import Link from 'react-router/Link'
import About from 'components/About/About.js'
import headerStyle from './app.css'
import Home from 'components/Home/Home.js'
import AddItem from 'components/AddItem'
import SignUp from 'components/SignUp/SignUp.js'
import SignIn from 'components/SignIn/SignIn.js'
import AccountNav from 'components/AccountNav'
import ItemView from 'components/ItemView/ItemView'
import ItemList from 'components/ItemList'
import SearchBar from 'components/Search/SearchBar.js'

const BasicExample = () => (
  <Router>
    <div className={headerStyle.bodyBackground}>
      <ul className={headerStyle.headerBackground}>
        <li className={headerStyle.li}><Link className={headerStyle.link} to="/">Home</Link></li>
        <li className={headerStyle.li}><Link className={headerStyle.link} to="/about">About</Link></li>
        <li className={headerStyle.li}><Link className={headerStyle.link} to="/add">Add an item</Link></li>
        <li className={headerStyle.li}><AccountNav/></li>
      </ul>

      <SearchBar />

      <hr/>

      <Match exactly pattern="/" component={Home} />
      <Match pattern="/about" component={About} />
      <Match pattern="/add" component={AddItem} />
      <Match pattern="/signup" component={SignUp} />
      <Match pattern="/signin" component={SignIn} />
      <Match pattern="/search" component={ItemList} />
    </div>
  </Router>
)

const Topics = ({ pathname }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li><Link to={`${pathname}/rendering`}>Rendering with React</Link></li>
      <li><Link to={`${pathname}/components`}>Components</Link></li>
      <li><Link to={`${pathname}/props-v-state`}>Props v. State</Link></li>
    </ul>

    <Match pattern={`${pathname}/:topicId`} component={Topic}/>
    <Match pattern={pathname} exactly render={() => (
      <h3>Please select a topic</h3>
      )}/>
  </div>
)

const Topic = ({ params }) => (
  <div>
    <h3>{params.topicId}</h3>
  </div>
)

export default BasicExample
