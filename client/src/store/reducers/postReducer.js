import * as ActionTypes from '../actions/actionTypes'

const init = {
    
    allPost: {}
}

const postReducer = (state = init, action) => {
    console.log(action)
    switch (action.type) {
        case ActionTypes.SET_POST: {
            return {
               
                allPost: action.payload.post
               
            }
        }
        default: return state
    }
}

export default postReducer