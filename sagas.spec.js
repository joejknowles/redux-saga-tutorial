import test from 'tape'
import { delay } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { incrementAsync } from './sagas'


test('incrementAsync Saga test', (assert) => {
  const gen = incrementAsync();

  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    'incrementAsync should call delay(1000)'
  )

  assert.deepEqual(
    gen.next().value,
    put({ type: 'INCREMENT' }),
    'incrementAsync should dispatch an INCREMENT action'
  )

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    'incrementAsync should be done'
  )

  assert.end()
})
