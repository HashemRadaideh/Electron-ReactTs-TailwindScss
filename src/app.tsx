import { useState } from 'react'

import './app.scss'

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-200 flex items-center justify-center h-screen">
      <p className="text-blue-600 text-3xl font-bold">Hello, World!</p>
    </div>
  )
}

export default App
