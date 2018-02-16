import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from './reducers'

const middlewareProd = [ thunk ]
const middlewareDev = [ ...middlewareProd, logger ]
const middleware = process.env.NODE_ENV === 'production' ? middlewareProd : middlewareDev

export default createStore(rootReducer, applyMiddleware(...middleware))
