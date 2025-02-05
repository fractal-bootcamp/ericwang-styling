import { useState } from 'react'
import Tasklist from './pages/tasklist'
import Messages from './pages/Messages'
import Post from './pages/Post'
import HeatGrid from './pages/HeatGrid'

function App() {

  return (
    <div className='w-screen p-[3%]'>
      <div className='h-screen min-h-[900px] max-w-[600px] mx-auto flex place-items-center'>
        <Tasklist />
      </div>
      <div className='h-screen min-h-[900px] max-w-[1080px] mx-auto flex place-items-center'>
        <Messages />
      </div>
      <div className='h-screen min-h-[900px] max-w-[600px] mx-auto flex place-items-center'>
        <Post />
      </div>
      <div className='h-screen min-h-[900px] max-w-[600px] mx-auto flex place-items-center'>
        <HeatGrid />
      </div>
    </div>
  )
}

export default App
