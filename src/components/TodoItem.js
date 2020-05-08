import React from 'react'

const TodoItem = ({ title, completed = false, id, toggleTodo, removeTodo }) => {
  function handleToggle() {
    toggleTodo(id)
  }

  function handleRemove() {
    removeTodo(id)
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
