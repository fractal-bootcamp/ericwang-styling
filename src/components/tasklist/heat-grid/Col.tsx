import React from 'react'

type ColProps = {
  header: string,
  length: number
}

const colors: Record<string, string>= {
  GRAY: "bg-gray-200",
  BLUE_1: "bg-blue-100",
  BLUE_2: "bg-blue-200",
  BLUE_3: "bg-blue-300",
  BLUE_4: "bg-blue-400",
  BLUE_5: "bg-blue-500",
}

const randomizeColor = () => {
  return colors[Object.keys(colors)[Math.floor(Math.random()*Object.keys(colors).length)]]
}

const Col: React.FC<ColProps> = ({header, length}) => {
  const allRows = Array.from({ length: length }, (_,i) => (
    <div key={`box-${i}`} className={`p-5 h-[calc(576px/7)] hover:opacity-80 cursor-pointer ${randomizeColor()}`}></div>
  ))

  return (
    <div className='flex flex-col gap-2 items-center'>
      <div className='text-sm'>{header}</div>
      <div className='flex flex-col gap-2 w-full' >
        {allRows}
      </div>
    </div>
  )
}

export default Col