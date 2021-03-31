import Reducer from './Reducer'   //import From Reducer File
import {createStore,applyMiddleware} from 'redux'  
import thunk from 'redux-thunk'

// applyMiddleware used for action changing in state


// const store = createStore(Reducer,{},applyMiddleware(thunk))
const store = createStore(Reducer,applyMiddleare(thunk))
export default store
