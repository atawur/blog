import { combineReducers } from 'redux'

import authReducer from './authReducer'
import errorReducer from './errorReducer'
import metaReducer from './metaReducer'
import userReducer from './userReducer'


const rootReducer = combineReducers({
    auth: authReducer,
    error: errorReducer,
    meta: metaReducer,
    userList:userReducer
})

export default rootReducer