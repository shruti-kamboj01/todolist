import React from 'react'

const Task = (props) => {
  return (
    <div className='flex flex-col w-[50%] ml-44 gap-y-2   justify-center  mt-10 mb-10'> 
      <h1 className={`text-black items-center flex flex-col rounded-md py-1 ${props.completed ?("bg-green-800 ")  :  ("bg-white")}`}>{props.taskName}</h1>
    <div className='flex justify-center gap-x-10 border-[2px] px-2 py-1 border-gray-600'>
    <button onClick={() => props.deleteTask(props.id)}
    className='text-xl mb-1 font-semibold'>x</button>
    <div className='border-[1px] border-gray-600'></div>
    <button onClick={() => props.completeTask(props.id)}
    className='font-semibold'>Completed</button>
    </div>
     </div>
  )
}

export default Task