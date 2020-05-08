import React from 'react'
import { useDispatch } from 'react-redux'

import { toggleTodo, removeTodo } from '../actions'

const TodoItem = ({ title, id, completed = false }) => {
  const dispatch = useDispatch()

  function handleToggle() {
    dispatch(toggleTodo(id))
  }

  function handleRemove() {
    dispatch(removeTodo(id))
  }

  return (
    <div style={{ width: 400, height: 25 }}>
      <input type="checkbox" onChange={handleToggle} checked={completed} />
      {title}
      <button onClick={handleRemove} style={{ float: 'right' }}>
        <span role="img" aria-label="delete task">
          ✖️
        </span>
      </button>
    </div>
  )
}

export default TodoItem
