import Axios from 'axios'
import jwtDecode from 'jwt-decode'
//
import * as ActionTypes from './actionTypes'
import { setLoadingState, setToastMessage } from './metaActions'
import { catchError } from './errorActions'


export const savePost = (post, history) => dispatch => {
    dispatch(setLoadingState(true))
    Axios.post('http://127.0.0.1:8000/api/post/save_post', post)
        .then((data) => {
            console.log('vvv',data)
            dispatch(setLoadingState(false))
            dispatch(catchError())
            dispatch(setToastMessage(data.msg))
            history.push('/post')
        })
        .catch(error => {
            dispatch(setLoadingState(false))
            dispatch(catchError(error.response.data.errors))
        })
}
export const allPost = (post, history) => dispatch => {
    dispatch(setLoadingState(true))
    Axios.get('http://127.0.0.1:8000/api/post', post)
        .then((data) => {
            //console.log('vvv',data)
            dispatch(setLoadingState(false))
            dispatch(catchError())
            dispatch(setPost())
        })
        .catch(error => {
            dispatch(setLoadingState(false))
            dispatch(catchError(error.response.data.errors))
        })
}




export const setPost = post => {
    return {
        type: ActionTypes.SET_POST,
        payload: {post: post ? post : {}}
    }
}