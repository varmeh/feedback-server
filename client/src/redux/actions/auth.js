import axios from 'axios'

import { types } from '../actions'

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({ type: types.FETCH_USER, payload: res })
}
