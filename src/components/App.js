import React from 'react'

import Header from './Header'
import ConnectedAddTodo from '../containers/ConnectedAddTodo'
import ConnectedTodoList from '../containers/ConnectedTodoList'
import ConnectedTodoFilter from '../containers/ConnectedTodoFilter'

const App = () => {
  return (
    <div style={{ width: 400 }}>
      <Header />
      <ConnectedAddTodo />
      <hr />
      <ConnectedTodoList />
      <hr />
      <ConnectedTodoFilter />
    </div>
  )
}

export default App
