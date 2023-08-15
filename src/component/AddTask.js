import React, { useEffect, useState } from 'react'
import { useTask } from './context/CardContext'
import ShowTask from './ShowTask'

const AddTask = () => {
    const {taskList,addTask,task}=useTask()
    const[inputTask,setInputTask]=useState('')

    // useEffect(()=>{
    //     console.log(task)
    //     if (task && task.id){
    //         setInputTask(task.task)
           
    //     }
    // },[task])
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
    console.log(task);


  return (
    <div>
        <form className='form mt-5' onSubmit={handleSubmit}>
            <div className='d-flex justify-content-center mb-4'>
                <input type='text' className='form-control' onChange={(e)=>setInputTask(e.target.value)} value={inputTask}/>
                <button type='submit' className='btn btn-success'>Add</button>
            </div>

        </form>

        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">TaskName</th>
      <th scope="col">Action</th>
    
    </tr>
  </thead>
  <tbody>
  {
            taskList.map((task,idx)=>(
                <ShowTask key={idx} idx={idx} task={task}/>
            ))
        }
  
  </tbody>
</table>

       
    </div>
  )
}

export default AddTask