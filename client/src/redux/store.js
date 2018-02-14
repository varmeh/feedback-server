import { createStore, applyMiddleware } from 'redux'

import rootReducer from './reducers'

const middlewareProd = []
const middlewareDev = [ ...middlewareProd ]
const middleware = process.env.NODE_ENV === 'production' ? middlewareProd : middlewareDev

export default createStore(rootReducer, applyMiddleware(...middleware))
