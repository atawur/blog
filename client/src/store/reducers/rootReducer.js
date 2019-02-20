import { combineReducers } from 'redux'

import authReducer from './authReducer'
import errorReducer from './errorReducer'
import metaReducer from './metaReducer'
import userReducer from './userReducer'
import postReducer from './postReducer'


const rootReducer = combineReducers({
    auth: authReducer,
    error: errorReducer,
    meta: metaReducer,
    postsList:postReducer
})

export default rootReducer