import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
//import { renderHook, act } from '@testing-library/react-hooks'
import { render, cleanup } from '@testing-library/react'
import App from './App'
//import { StateContextWrapper } from './testUtils'
//import appReducer from './reducers'

let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  cleanup()
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

test('should render snapshot', () => {
  const { asFragment } = render(<App />)
  expect(asFragment(<App />)).toMatchSnapshot()
})

// test('should fetch data', () => {
//   const { result } = renderHook(() => appReducer(), {
//     wrapper: StateContextWrapper,
//   })
//   const sample = [{ id: 'test' }, { id: 'test2' }]
//   act(() => result.current.dispatch({ type: 'FETCH_TODOS', todos: sample }))
//   expect(result.current.state).toEqual(sample)
// })
