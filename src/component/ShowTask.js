import React from 'react'
import { useTask } from './context/CardContext'

const ShowTask = ({task,idx}) => {
  const {removeTask,editTask}=useTask()
  console.log("task",idx)
  return (
  
    <tr key={idx}>
    <td>{idx+1}</td>
      <td>{task.task}</td>
      <td><button className='btn btn-secondary' onClick={()=>editTask(task.id)}>Edit</button>
      <button className='btn btn-danger' onClick={()=>removeTask(task)}>Delete</button></td>
     
    </tr>
  
  )
}

export default ShowTask