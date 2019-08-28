import React, { Component } from 'react'
import AppNavigator from './src/navigation/AppNavigator';

//Redux config
import configureStore from './src/redux/store'
import { Provider } from 'react-redux';

const store = configureStore();
//redux end

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <AppNavigator />
      </Provider>
    )
  }
}
