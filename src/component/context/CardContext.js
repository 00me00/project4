import { createContext, useContext, useReducer } from "react"
import { taskReducer } from "../reducer/cardReducer";

const initialState={
    taskList:[],
    // task
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


    const value={
        taskList:state.taskList,
        addTask
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