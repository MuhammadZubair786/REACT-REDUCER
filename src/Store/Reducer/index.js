// For Single reducer

// const INTIAL_STATE = {
//     name :'Muhammad Zubair',
//     age:21
// }

// export default  (state=INTIAL_STATE)=>{
//     return state
// }

// fro Multiply Reducer
import { combineReducers} from 'redux'
import App_reducer from './App_reducer'
import Auth_reducer from './Auth_reducer'
export default combineReducers({
    auth:Auth_reducer,
    app:App_reducer
})
