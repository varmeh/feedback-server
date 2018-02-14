import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App'  // React component
import store from './redux/store'   // Redux Store

// Provider component connects React App with Redux Store
ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, 
    document.querySelector('#root')
)
