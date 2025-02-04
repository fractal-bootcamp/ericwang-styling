import React from 'react'

interface TaskProps {
  name: string,
  description: string,
  checked: boolean,
  index: string,
  handleChecked: (index:number) => void
}

const Task: React.FC<TaskProps> = ({ name, description, checked, index, handleChecked }) => {
  return (
    <div className={`border border-gray-300 ${checked && 'bg-green-50'} rounded-lg p-4 flex gap-4`}>
      <input 
        type='checkbox' 
        className='peer relative appearance-none shrink-0 w-6 h-6 border-1 border-gray-200 rounded-lg mt-1 bg-white
        checked:bg-green-600 self-center' 
        checked={checked}
        onClick={() => handleChecked(index)}
      />
      <article className='flex flex-col'>
        <h3 className='text-xl'>{name}</h3>
        <div>{description}</div>
      </article>
    </div>
  )
}

export default Task