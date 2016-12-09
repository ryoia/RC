import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';
import { Provider } from 'react-redux'
import { compose, createStore } from 'redux'
import persistState from 'redux-localstorage'
import reducers from 'reducers'

const enhancer = compose(
  persistState('user', {key: 'redux state'})
)

const store = createStore(reducers, enhancer);

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

const app = document.getElementById('root');
ReactDOM.render(<Main />, app);
