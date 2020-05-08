import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = () => {
  const dispatch = useDispatch()

  const [input, setInput] = useState('')

  function handleInput(e) {
    setInput(e.target.value)
  }

  function handleAdd(e) {
    if (input) {
      dispatch(addTodo(input))
      setInput('')
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleAdd()
      }}
    >
      <input
        type="text"
        placeholder="enter new task"
        value={input}
        onChange={handleInput}
        style={{ width: 350, height: 15 }}
      />
      <input
        type="submit"
        style={{ float: 'right', marginTop: 2 }}
        disabled={!input}
        value="add"
      />
    </form>
  )
}

export default AddTodo
