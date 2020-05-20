import { compose, createStore, combineReducers, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import posterReducers from "./reducers/posterReducers.js"
import eventReducers from "./reducers/eventReducer.js"
import rootSaga from "../sagas"

const sagaMiddleware = createSagaMiddleware()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  combineReducers({
    posters: posterReducers, events: eventReducers
  }),
  composeEnhancer(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)
