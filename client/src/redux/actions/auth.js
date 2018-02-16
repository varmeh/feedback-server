import axios from 'axios'

import { types } from '../actions'

export const fetchUser = () => dispatch => {
    axios.get('/api/current_user')
        .then(res => dispatch({ type: types.FETCH_USER, payload: res }))
}
