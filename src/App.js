import React, { useReducer, useEffect, useMemo } from 'react'

import Header from './Header'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'

import { fetchApiTodos } from './api'
import appReducer from './reducers'
import StateContext from './StateContext'

const App = () => {
  const [state, dispatch] = useReducer(appReducer, {
    todos: [],
    filter: 'all',
  })

  useEffect(() => {
    fetchApiTodos().then((todos) => dispatch({ type: 'FETCH_TODOS', todos }))
  }, [dispatch])

  const filteredTodos = useMemo(() => {
    const { filter, todos } = state
    switch (filter) {
      case 'active':
        return todos.filter((t) => !t.completed)
      case 'completed':
        return todos.filter((t) => t.completed)
      default:
      case 'all':
        return todos
    }
  }, [state])

  function addTodo(title) {
    dispatch({ type: 'ADD_TODO', title })
  }

  function toggleTodo(id) {
    dispatch({ type: 'TOGGLE_TODO', id })
  }

  function removeTodo(id) {
    dispatch({ type: 'REMOVE_TODO', id })
  }

  function filterTodos(filter) {
    dispatch({ type: 'FILTER_TODOS', filter })
  }

  return (
    <StateContext.Provider value={filteredTodos}>
      <div style={{ width: 400 }}>
        <Header />
        <AddTodo addTodo={addTodo} />
        <hr />
        <TodoList toggleTodo={toggleTodo} removeTodo={removeTodo} />
        <hr />
        <TodoFilter filter={state.filter} filterTodos={filterTodos} />
      </div>
    </StateContext.Provider>
  )
}

export default App
