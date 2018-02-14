import { createStore, applyMiddleware } from 'redux'

const middlewareProd = []
const middlewareDev = [ ...middlewareProd ]
const middleware = process.env.NODE_ENV === 'production' ? middlewareProd : middlewareDev

export default createStore(() => [], applyMiddleware(...middleware))
