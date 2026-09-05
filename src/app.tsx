import { useEffect } from 'react'
import './index.css'

function App() {
  useEffect(() => {
    window.location.href = 'https://github.com/dekthaiinchina'
  }, [])

  return null
}

export default App