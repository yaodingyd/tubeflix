import React from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import routes from '../routes'
import store from '../store'

function App () {
  return (
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  )
}

export default App
