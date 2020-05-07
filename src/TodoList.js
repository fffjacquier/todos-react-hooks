import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import StateContext from './StateContext'

const TodoList = (props) => {
  const items = useContext(StateContext)

  return items.map((item) => <TodoItem {...props} {...item} key={item.id} />)
}

export default TodoList
