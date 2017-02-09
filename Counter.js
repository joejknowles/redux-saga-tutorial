/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) =>
      <div>
        <button onClick={onIncrementAsync}>
          Increment after 1 sec
        </button>
        {' '}
        <button onClick={onDecrement}>
          Decrement
        </button>
        <hr />
        <div>
          Counter: {value} times
        </div>
      </div>

export default Counter
