import * as ActionTypes from '../actions/actionTypes'

const init = {
    
    userList: {}
}

const userReducer = (state = init, action) => {
    console.log(action)
    switch (action.type) {
        case ActionTypes.USER_LIST: {
            return {
                ...state,
                userList: action.payload.userList
               
            }
        }
        default: return state
    }
}

export default userReducer