import React from 'react'

const ShowTask = ({task}) => {
  return (
    <div className='task-item'>
      <p>{task.task}</p>
    </div>
  )
}

export default ShowTask