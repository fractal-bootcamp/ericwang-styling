import { useState } from 'react'
import Tasklist from './pages/Tasklist'

function App() {

  return (
    <div className='w-screen'>
      <div className='h-screen max-w-[600px] mx-auto flex place-items-center'>
        <Tasklist />
      </div>
    </div>
  )
}

export default App
