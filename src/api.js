export const generateID = () => {
  const S4 = () =>
    (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  return (
    S4() +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    S4() +
    S4()
  )
}

export const fetchApiTodos = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const initial = [
        { id: generateID(), title: 'Write this damned book' },
        { id: generateID(), title: 'Finish react hooks course' },
      ]
      resolve(initial)
    }, 100)
  )
