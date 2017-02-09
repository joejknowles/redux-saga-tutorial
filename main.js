import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'

import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'

import Counter from './Counter'
import reducer from './reducers'

const sagaMiddleWare = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleWare))

sagaMiddleWare.run(rootSaga)

const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
      onDecrement={() => action('DECREMENT')} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
