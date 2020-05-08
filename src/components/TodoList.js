import React, { useMemo } from 'react'
import ConnectedTodoItem from '../containers/ConnectedTodoItem'

const TodoList = ({ filter, todos }) => {
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter((t) => !t.completed)
      case 'completed':
        return todos.filter((t) => t.completed)
      default:
        return todos
    }
  }, [filter, todos])

  return filteredTodos.map((item) => (
    <ConnectedTodoItem {...item} key={item.id} />
  ))
}

export default TodoList
