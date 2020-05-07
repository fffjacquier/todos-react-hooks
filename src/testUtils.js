import React, { useReducer } from 'react'
import StateContext from './StateContext'
import appReducer from './reducers'

export function StateContextWrapper({ children }) {
  const [state, dispatch] = useReducer(appReducer, {
    user: '',
    posts: [],
    error: '',
  })

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  )
}
