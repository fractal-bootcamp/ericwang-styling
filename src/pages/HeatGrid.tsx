import React from 'react'
import Col from '../components/tasklist/heat-grid/Col'

const HeatGrid = () => {
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]

  return (
    <div className='w-full'>
        <div className='mb-10'>
            <h1 className='text-4xl font-bold'>Heat Grid</h1>
        </div>
        <div className='grid grid-cols-7 gap-2'>
          {days.map((day) => <Col header={day} length={5} />)}
        </div>
    </div>
  )
}

export default HeatGrid