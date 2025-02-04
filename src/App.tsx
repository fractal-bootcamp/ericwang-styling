import { useState } from 'react'
import Tasklist from './pages/tasklist'
import Messages from './pages/Messages'
import Post from './pages/Post'

function App() {

  return (
    <div className='w-screen p-[3%]'>
      <div className='h-screen max-w-[600px] mx-auto flex place-items-center'>
        <Tasklist />
      </div>
      <div className='h-screen max-w-[1080px] mx-auto flex place-items-center'>
        <Messages />
      </div>
      <div className='h-screen max-w-[600px] mx-auto flex place-items-center'>
        <Post />
      </div>
    </div>
  )
}

export default App
