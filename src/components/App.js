import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchTodos } from '../actions'
import Header from './Header'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import TodoFilter from '../components/TodoFilter'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <div style={{ width: 400 }}>
      <Header />
      <AddTodo />
      <hr />
      <TodoList />
      <hr />
      <TodoFilter />
    </div>
  )
}

export default App
