import { useState } from 'react'
import styles from '../styles/Mario.module.css'

const Test = () => {
  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount(prev => prev+1)
  }

  return (
    <main className={styles.main}>
      <button onClick={addCount}>Count: {count}</button>
    </main>
  )
}

export default Test
