import { types } from '../actions'

const INITIAL_STATE = {
    loggedIn: null,
    user: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.FETCH_USER:
            return { ...state, loggedIn: action.payload !== '', user: action.payload }

        default:
            return state
    }
}
