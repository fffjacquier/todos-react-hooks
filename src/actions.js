import {
  FETCH_TODOS,
  ADD_TODO,
  TOGGLE_TODO,
  FILTER_TODOS,
  REMOVE_TODO,
} from './actionTypes'
import { fetchApiTodos } from './api'

export function fetchTodos() {
  return async (dispatch) => {
    const todos = await fetchApiTodos()
    dispatch({ type: FETCH_TODOS, todos })
  }
}

export function addTodo(title) {
  return { type: ADD_TODO, title }
}

export function toggleTodo(id) {
  return { type: TOGGLE_TODO, id }
}

export function removeTodo(id) {
  return { type: REMOVE_TODO, id }
}

export function filterTodos(filter) {
  return { type: FILTER_TODOS, filter }
}
