import { createContext, useContext, useReducer } from "react"
import { taskReducer } from "../reducer/cardReducer";

const initialState={
    taskList:[],
     task:{}
}
const TaskContext=createContext(initialState)
export const TaskProvider=({children})=>{
    const [state,dispatch]=useReducer(taskReducer,initialState);
    const addTask=(task)=>{
        const updatedTask=state.taskList.concat(task)
        dispatch({
            type:"ADD_TASK",
            payload:{
                tasks:updatedTask
            }
        })
    }
    const removeTask=(task)=>{
        console.log("del",task)
        const updatedTask=state.taskList.filter(remove=>remove.id!==task.id)
        dispatch({
            type:"REMOVE_TASK",
            payload:{
                tasks:updatedTask
            }
        })
    }
    const editTask=(id)=>{
        const updatedTask=state.taskList.find(current=>current.id===id)
        console.log("ll",updatedTask)
        dispatch({
            type:"EDIT_TASK",
            payload:{
                task:updatedTask
            }
        })
    }
    const updateTask=(id,task)=>{
        const updatedTask=state.taskList.map((current)=>(
            current.id===id?{id:task.id,task:task.task}:current
        ))
        dispatch({
            type:"UPDATE_TASK",
            payload:{
                tasks:updatedTask
            }
        })
    }


    const value={
        taskList:state.taskList,
        addTask,
        removeTask,
        editTask,
        updateTask
    }

    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTask=()=>{
    const context=useContext(TaskContext)
    return context
}