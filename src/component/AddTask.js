import React, { useState } from 'react'
import { useTask } from './context/CardContext'
import ShowTask from './ShowTask'

const AddTask = () => {
    const {taskList,addTask}=useTask()
    const[inputTask,setInputTask]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        if (inputTask.trim()==='')return
        const newTask={
            id:Date.now(),
            task:inputTask
        
        }
        addTask(newTask)
        setInputTask("")
    }
    console.log(taskList)

  return (
    <div>
        <form className='form mt-5' onSubmit={handleSubmit}>
            <div className='d-flex justify-content-center mb-4'>
                <input type='text' className='form-control' onChange={(e)=>setInputTask(e.target.value)} value={inputTask}/>
                <button type='submit' className='btn btn-success'>Add</button>
            </div>

        </form>
        {
            taskList.map((task)=>(
                <ShowTask key={task.id} task={task}/>
            ))
        }
    </div>
  )
}

export default AddTask