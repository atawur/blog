import * as ActionTypes from '../actions/actionTypes'

const init = {
    
    postsList: {posts:[]}
}

const postReducer = (state = init, action) => {
    console.log('action',action)
    switch (action.type) {
        case ActionTypes.SET_POST: {
            return {
                ...state,
                postsList: {posts:action.payload.data}
               
            }
        }
        default: return state
    }
}

export default postReducer