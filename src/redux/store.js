import {createStore} from 'redux'
import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
// import 'regenertor-runtime/runtime'

import reducer from './reducer'
import middleware from './middlware'

const sagaMiddleware=createSagaMiddleware()
const store=createStore(reducer,composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(middleware)

export default store