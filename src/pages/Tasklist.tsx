import React from 'react'
import { useState } from 'react'
import Task from '../components/tasklist/Task'

type Task = {
    name: string,
    description: string,
    checked: boolean
}

const allTasks: Record<number, Task> = {
    1: {
        name: 'Dishwashing',
        description: 'Wash and dry dishes, pots, pans, and utensils',
        checked: false
    },
    2: {
        name: 'Laundry',
        description: 'Wash, dry, fold, and put away clothes and linens.',
        checked: false
    },
    3: {
        name: 'Vacuuming',
        description: 'Vacuum carpets, rugs, and floors throughout the house',
        checked: false
    },
    4: {
        name: 'Dusting',
        description: 'Dust furniture, shelves, and other surfaces',
        checked: false
    }
}

const Tasklist = () => {
    const [tasks, setTasks] = useState(allTasks)

    const handleChecked = (index:number) => {
        setTasks((prevState) => ({
            ...prevState,
            [index]: {
                ...prevState[index],
                checked: !prevState[index].checked
            }
        }))
    }

    return (
        <div className='flex flex-col gap-2'>
            <div className='mb-4'>
                <h1 className='text-4xl font-bold'>Tasklist</h1>
                <span>Sorted by completion</span>
            </div>
            <div className='flex flex-col gap-4'>
                {Object.keys(tasks).map((key) => {
                    return (
                        <Task 
                            key={key}
                            name={tasks[Number(key)].name} 
                            description={tasks[Number(key)].description}
                            checked={tasks[Number(key)].checked}
                            index={Number(key)}
                            handleChecked={handleChecked}
                        />
                    )
                })}

            </div>
        </div>
    )
}

export default Tasklist