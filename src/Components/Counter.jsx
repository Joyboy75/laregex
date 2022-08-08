import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>count</h1>
      <p>{count}</p>
      <button onClick={() => setCount(prevcount => prevcount - 1)}>
        -1
      </button>{' '}
      &nbsp;
      <button onClick={() => setCount(prevcount => prevcount + 1)}>+1</button>
    </div>
  )
}
