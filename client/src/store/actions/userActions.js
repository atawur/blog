import Axios from 'axios'
import * as ActionTypes from './actionTypes'
import { setLoadingState, setToastMessage } from './metaActions'
import { catchError } from './errorActions'
import setAuthToken from '../../utils/setAuthToken'
export const userList = (user, history) => dispatch => {
    dispatch(setLoadingState(true))
    Axios.get('/api/users/all', user)
        .then(({data}) => {
            //console.log('hheet')
            //console.log(data)
            dispatch(setLoadingState(false))
            dispatch(catchError())
            //dispatch(setToastMessage(data.message))
            dispatch(setUsers(data.users))
            //history.push('/registration-success')
        })
        .catch(error => {
            dispatch(setLoadingState(false))
            //dispatch(catchError(error.response.data))
        })
}

export const setUsers = users => {
    return {
        type: ActionTypes.USER_LIST,
        payload: {userList: users}
    }
}