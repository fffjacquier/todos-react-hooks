import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import ConnectedApp from './containers/ConnectedApp'
import store from './configureStore'

test('should render', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedApp />
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

// test('should fetch data', () => {
//   const { result } = renderHook(() => appReducer(), {
//     wrapper: StateContextWrapper,
//   })
//   const sample = [{ id: 'test' }, { id: 'test2' }]
//   act(() => result.current.dispatch({ type: 'FETCH_TODOS', todos: sample }))
//   expect(result.current.state).toEqual(sample)
// })
